# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with inspector (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run gen-types    # Generate GraphQL types after modifying .graphql files
```

## Architecture Overview

This is an Optimizely SaaS CMS integration with Next.js 15 App Router. Content is fetched via GraphQL from Optimizely Content Graph.

### Data Flow

1. **GraphQL Queries** (`lib/optimizely/queries/`) define what content to fetch
2. **Codegen** generates TypeScript types and SDK methods in `lib/optimizely/types/generated.ts`
3. **Fetch Client** (`lib/optimizely/fetch.ts`) wraps the SDK with caching and preview support
4. **Block Components** render content types dynamically via the Block Factory pattern

### Route Groups

- `app/(site)/[locale]/` - Published content with SSG
- `app/(draft)/[locale]/draft/[version]/` - Preview/draft mode routes
- `app/api/draft/` - Enable/disable draft mode
- `app/api/revalidate/` - Webhook for cache invalidation

### Block Factory Pattern

Components are registered in `components/content-area/block.tsx`:

```tsx
const MyBlock = dynamic(() => import('../block/my-block'))
export const blocks = { MyBlock } as const  // Key must match GraphQL __typename
```

The `ContentAreaMapper` (`components/content-area/mapper.tsx`) renders blocks by matching `__typename` to registered components.

### Adding a New Block

1. Add fragment to `lib/optimizely/queries/fragments/Block.graphql`
2. Include fragment in `ItemsInContentArea` union
3. Run `npm run gen-types`
4. Create component in `components/block/` extending `BlockBase`
5. Register in `components/content-area/block.tsx`

### GraphQL Client Usage

```typescript
import { optimizely } from '@/lib/optimizely/fetch'

// Published content (cached)
const { data } = await optimizely.GetPageByURL({ locales: [locale], slug })

// Preview content (no cache)
const { data } = await optimizely.GetPageByURL({ locales, slug }, { preview: true })

// With cache tag for granular invalidation
const { data } = await optimizely.getHeader({ locale }, { cacheTag: 'optimizely-header' })
```

### Block Component Pattern

```tsx
import { MyBlock as MyBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'

type Props = MyBlockProps & BlockBase

export default function MyBlock({ fieldName, isFirst, displaySettings, preview }: Props) {
  return <div data-epi-edit="fieldName">{fieldName}</div>  // data-epi-edit enables on-page editing
}
```

### Key Types

- `BlockBase` - Common props: `isFirst`, `preview`, `displaySettings`
- `displaySettings` - Visual Builder styling options (key-value pairs)
- `Locales` - Generated locale enum (en, pl, sv)

### Environment Variables

Required: `OPTIMIZELY_API_URL`, `OPTIMIZELY_SINGLE_KEY`, `OPTIMIZELY_PREVIEW_SECRET`, `OPTIMIZELY_REVALIDATE_SECRET`, `NEXT_PUBLIC_CMS_URL`

Optional: `OPTIMIZELY_START_PAGE_URL` - For hierarchical URL normalization when Start Page isn't at root

### Caching

- Published routes use `force-cache` with `optimizely-content` tag
- Preview routes use `no-store`
- Revalidation webhook at `/api/revalidate` handles path and tag-based invalidation
