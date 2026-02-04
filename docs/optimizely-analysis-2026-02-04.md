# Optimizely CMS Analysis Report

**Generated**: 2026-02-04
**Project Path**: c:\repos\Optimizely\optimizely-saas-cms-nextjs-15

## Summary

- **Platform**: Optimizely Content Graph (SaaS) Frontend
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **API Integration**: GraphQL via Content Delivery API
- **Issues Found**: 6 (1 Critical, 3 Warning, 2 Info)

## Scores

| Category | Score | Issues |
|----------|-------|--------|
| Architecture | A | 0 |
| Security | C | 2 |
| Performance | A | 0 |
| Code Quality | B | 2 |
| Dependencies | A | 0 |
| Conventions | A | 0 |

## Critical Issues

### SEC-001: Draft Mode Token Not Validated
**Severity**: Critical
**File**: [app/api/draft/route.ts:9](app/api/draft/route.ts#L9)

The draft mode endpoint receives a `preview_token` parameter but never validates it against the expected secret.

```typescript
const token = searchParams.get('preview_token')
// Token is retrieved but never validated against OPTIMIZELY_PREVIEW_SECRET
```

**Remediation**: Add validation to verify the preview token before enabling draft mode:

```typescript
if (token !== process.env.OPTIMIZELY_PREVIEW_SECRET) {
  return new NextResponse('Unauthorized', { status: 401 })
}
```

## Warnings

### SEC-002: API Key in URL Query String
**Severity**: Warning
**File**: [lib/optimizely/fetch.ts:45](lib/optimizely/fetch.ts#L45)

The API key is passed as a URL query parameter which can be logged in server access logs, browser history, and monitoring tools.

```typescript
const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`
```

**Remediation**: Consider using Authorization header instead of query parameter if supported by the Optimizely Content Graph API. Note: This is the standard pattern for Content Graph, so this may be acceptable depending on your security requirements.

### CQ-001: Use of `any` Type in Content Area Mapper
**Severity**: Warning
**File**: [components/content-area/mapper.tsx:10](components/content-area/mapper.tsx#L10)

The `blocks` parameter uses `any[]` type which loses type safety from the generated GraphQL types.

```typescript
blocks?: any[] | null
```

**Remediation**: Use the generated types from graphql-codegen for proper type safety:

```typescript
import { BlockFragment } from '@/lib/optimizely/types/generated'
blocks?: BlockFragment[] | null
```

### CQ-002: Empty Error Return in generateMetadata
**Severity**: Warning
**File**: [app/(site)/[locale]/[slug]/page.tsx:29-31](app/(site)/[locale]/[slug]/page.tsx#L29-L31)

When GraphQL errors occur, an empty metadata object is returned without logging the error.

```typescript
if (errors) {
  return {}
}
```

**Remediation**: Log the error for debugging purposes:

```typescript
if (errors) {
  console.error('Error fetching page metadata:', errors)
  return {}
}
```

## Info

### SEC-003: Security Headers Properly Configured
**Severity**: Info (Positive)
**File**: [next.config.ts:25-37](next.config.ts#L25-L37)

Security headers are correctly configured:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `Content-Security-Policy: frame-ancestors` - Allows embedding only from Optimizely CMS

### PERF-001: Caching Strategy Well Implemented
**Severity**: Info (Positive)
**File**: [lib/optimizely/fetch.ts:27-41](lib/optimizely/fetch.ts#L27-L41)

- Default cache strategy uses `force-cache` for optimal performance
- Cache tags (`optimizely-content`) enable targeted revalidation
- Preview mode correctly bypasses cache with `no-store`

## Architecture Overview

### Project Structure
```
app/
├── (draft)/[locale]/       # Draft mode routes
├── (site)/[locale]/        # Public site routes
└── api/
    ├── draft/              # Draft mode enablement
    └── revalidate/         # Webhook-based cache invalidation

components/
├── block/                  # CMS block components
├── content-area/           # Content area rendering
├── draft/                  # Draft mode UI
├── layout/                 # Header, footer
├── ui/                     # shadcn/ui components
└── visual-builder/         # Visual Builder support

lib/
├── optimizely/
│   ├── fetch.ts            # GraphQL client
│   ├── types/              # Generated types
│   └── utils/              # Language utilities
└── utils/                  # General utilities
```

### Key Patterns

1. **GraphQL SDK Pattern**: Uses `graphql-codegen` to generate typed SDK from schema
2. **Block Factory Pattern**: Dynamic component rendering based on content type
3. **Draft Mode**: Supports Optimizely CMS preview with on-page editing
4. **Visual Builder**: Supports Optimizely Visual Builder experiences
5. **ISR/Caching**: Uses Next.js cache tags for incremental static regeneration

## Recommendations

### High Priority
1. **Validate preview token** in draft mode endpoint to prevent unauthorized preview access

### Medium Priority
2. **Add error logging** in metadata generation for better debugging
3. **Replace `any` types** with generated GraphQL types for better type safety

### Low Priority
4. Consider moving API key to Authorization header if Content Graph supports it

## Dependencies

| Package | Version | Status |
|---------|---------|--------|
| next | ^15.2.8 | Current |
| react | ^19.0.0 | Current |
| typescript | ^5 | Current |
| tailwindcss | ^3.4.1 | Current |

No known vulnerabilities detected.

---
*Report generated by optimizely@cms-analyzers-marketplace v1.0.0*
