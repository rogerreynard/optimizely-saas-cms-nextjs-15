# Project Conventions Skill

This skill documents the coding conventions and patterns for this Optimizely SaaS CMS + Next.js project.

## Project Overview

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **CMS**: Optimizely SaaS CMS (Content Cloud)
- **API**: GraphQL with GraphQL Codegen
- **Styling**: Tailwind CSS + Radix UI
- **Language**: TypeScript (strict)

## Directory Structure

```
project-root/
├── app/                        # Next.js App Router
│   ├── (site)/                 # Published content routes
│   ├── (draft)/                # Preview routes
│   └── api/                    # API routes
├── components/
│   ├── block/                  # Content block components
│   ├── content-area/           # Content area mapper
│   ├── draft/                  # Draft mode components
│   ├── layout/                 # Header, Footer
│   ├── ui/                     # Radix UI components
│   └── visual-builder/         # Visual Builder wrapper
├── lib/
│   ├── optimizely/
│   │   ├── fetch.ts            # GraphQL client
│   │   ├── queries/            # GraphQL queries
│   │   ├── types/
│   │   │   ├── generated.ts    # Auto-generated (DO NOT EDIT)
│   │   │   ├── block.ts        # Block base types
│   │   │   ├── experience.ts   # Visual Builder types
│   │   │   └── typeUtils.ts    # Type helpers
│   │   └── utils/
│   │       └── language.ts     # Locale utilities
│   └── utils/                  # General utilities
├── public/                     # Static assets
├── .claude/                    # Claude skills
└── docs/                       # Documentation
```

## Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `hero-block.tsx` |
| Components | PascalCase | `HeroBlock` |
| Functions | camelCase | `getValidLocale` |
| Constants | SCREAMING_SNAKE | `DEFAULT_LOCALE` |
| GraphQL queries | PascalCase | `GetPageByURL` |
| GraphQL fragments | PascalCase + Fragment | `HeroBlockFragment` |
| Types/Interfaces | PascalCase | `BlockBase` |
| CSS classes | Tailwind conventions | `container mx-auto` |

## Import Patterns

### Path Aliases

```typescript
// Use @ alias for root imports
import { optimizely } from '@/lib/optimizely/fetch'
import { cn } from '@/lib/utils'
import { HeroBlock } from '@/components/block/hero-block'
```

### Import Order

```typescript
// 1. React/Next.js imports
import { Suspense } from 'react'
import { Metadata } from 'next'

// 2. Third-party imports
import { cva } from 'class-variance-authority'

// 3. Internal imports (@ alias)
import { optimizely } from '@/lib/optimizely/fetch'
import { cn } from '@/lib/utils'

// 4. Types
import type { BlockBase } from '@/lib/optimizely/types/block'
```

## Component Patterns

### Server Components (Default)

```tsx
// Server component - async data fetching
export default async function PageComponent({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { data } = await optimizely.GetStartPage({ locales: locale })

  return <div>{/* render */}</div>
}
```

### Client Components

```tsx
'use client'

import { useState, useEffect } from 'react'

export default function ClientComponent({ data }: Props) {
  const [state, setState] = useState()

  return <div>{/* interactive */}</div>
}
```

## Styling Conventions

### Tailwind CSS

```tsx
// Use cn() for conditional classes
import { cn } from '@/lib/utils'

<div className={cn(
  'container mx-auto px-4',
  isFirst && 'pt-20',
  className
)} />
```

### Class Variance Authority (cva)

```tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      default: 'bg-primary text-white',
      outline: 'border border-input',
    },
    size: {
      default: 'h-10 px-4',
      sm: 'h-9 px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
```

## Type Patterns

### Import Generated Types

```typescript
// Always import from generated types
import { HeroBlock as HeroBlockProps } from '@/lib/optimizely/types/generated'
import { Locales } from '@/lib/optimizely/types/generated'
```

### Extend with BlockBase

```typescript
import { BlockBase } from '@/lib/optimizely/types/block'

type ExtendedProps = GeneratedProps & BlockBase
```

### Safe Type Casting

```typescript
import { castContent, SafeContent } from '@/lib/optimizely/types/typeUtils'

const item = castContent<NavItem>(content as SafeContent, 'NavItem')
if (!item) return null
```

## Error Handling

### API Responses

```typescript
const { data, errors } = await optimizely.getPageByURL({...})

if (errors) {
  console.error(errors)
  return notFound() // or handle appropriately
}

if (!data?.CMSPage?.item) {
  return notFound()
}
```

### Try-Catch Pattern

```typescript
try {
  const response = await fetch(endpoint, {...})
  const result = await response.json()
  return result
} catch (e) {
  if (isVercelError(e)) {
    throw { status: e.status || 500, message: e.message }
  }
  throw { error: e }
}
```

## Caching Patterns

### Next.js Fetch Caching

```typescript
// Default: force-cache for published content
cache: 'force-cache'

// Preview: no-store for draft content
cache: 'no-store'

// Cache tags for granular invalidation
next: { tags: ['optimizely-content', 'optimizely-header'] }
```

### Revalidation

```typescript
import { revalidatePath, revalidateTag } from 'next/cache'

// Revalidate by path
await revalidatePath(urlWithLocale)

// Revalidate by tag
await revalidateTag('optimizely-header')
```

## Environment Variables

```bash
# Required
OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v2
OPTIMIZELY_SINGLE_KEY=your-api-key

# Preview/Draft Mode
OPTIMIZELY_PREVIEW_SECRET=your-preview-secret

# Revalidation Webhook
OPTIMIZELY_REVALIDATE_SECRET=your-webhook-secret

# Optional
OPTIMIZELY_START_PAGE_URL=/start-page  # For hierarchical URL normalization
```

## Git Conventions

### Commit Messages

```
feat: add new block component
fix: resolve caching issue in draft mode
docs: update README
refactor: simplify content area mapper
```

### File Changes

- Always run codegen after GraphQL changes: `npm run codegen`
- Register new blocks in `components/content-area/block.tsx`
- Add fragments to `ItemsInContentArea` union

## Testing Checklist

When adding new features:

1. [ ] Types generated correctly (`npm run codegen`)
2. [ ] Works in published mode
3. [ ] Works in draft/preview mode
4. [ ] Works with Visual Builder
5. [ ] Responsive on mobile
6. [ ] On-page editing attributes present (`data-epi-edit`)
