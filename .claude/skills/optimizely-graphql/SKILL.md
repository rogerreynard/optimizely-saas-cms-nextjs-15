# Optimizely GraphQL Queries Skill

This skill teaches Claude how to create and modify GraphQL queries for this Optimizely SaaS CMS project.

## Architecture Overview

```
lib/optimizely/
├── fetch.ts                 # GraphQL client with caching
├── queries/
│   ├── fragments/
│   │   └── Block.graphql    # Reusable block fragments
│   ├── draft/               # Preview/draft mode queries
│   ├── GetPageByURL.graphql # Page queries
│   ├── GetStartPage.graphql
│   └── ...
└── types/
    └── generated.ts         # Auto-generated types (DO NOT EDIT)
```

## Fragment Pattern

### Location
`lib/optimizely/queries/fragments/Block.graphql`

### Template

```graphql
fragment {BlockName}Fragment on {BlockName} {
  propertyName
  anotherProperty
}
```

### Nested Content Items

```graphql
fragment PortfolioGridBlockFragment on PortfolioGridBlock {
  title
  items {
    __typename
    ... on PortfolioItemBlock {
      title
      description
      imageUrl
      link
    }
  }
}
```

### Union Fragment (ItemsInContentArea)

All block fragments must be added to the union fragment:

```graphql
fragment ItemsInContentArea on _IContent {
  __typename
  ...HeroBlockFragment
  ...ContactBlockFragment
  ...NewBlockFragment      # Add new fragments here
}
```

## Query Patterns

### Page Query

```graphql
query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(
    locale: $locales
    where: { _metadata: { url: { default: { eq: $slug } } } }
  ) {
    item {
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
```

### Content by GUID

```graphql
query GetContentByGuid($guid: String!) {
  _Content(
    where: { _metadata: { key: { eq: $guid } } }
  ) {
    item {
      _metadata {
        url {
          default
          hierarchical
          type
        }
      }
    }
  }
}
```

### Visual Builder Experience

```graphql
query GetVisualBuilderBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: { _metadata: { url: { default: { eq: $slug } } } }
  ) {
    item {
      title
      shortDescription
      keywords
      _metadata {
        url { default }
      }
      composition {
        nodes {
          ... on CompositionStructureNode {
            key
            nodeType
            rows {
              key
              columns {
                key
                elements {
                  key
                  displaySettings { key value }
                  component { ...ItemsInContentArea }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## Draft Mode Queries

Draft queries in `lib/optimizely/queries/draft/` fetch ALL versions:

```graphql
query GetAllPagesVersionByURL($locales: [Locales], $slug: String) {
  CMSPage(
    locale: $locales
    where: { _metadata: { url: { default: { eq: $slug } } } }
  ) {
    items {  # Use 'items' (plural) to get all versions
      _metadata {
        version
      }
      title
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
```

## Calling GraphQL from Code

### Using the SDK

```typescript
import { optimizely } from '@/lib/optimizely/fetch'

// Published content (cached)
const { data, errors } = await optimizely.getPageByURL({
  locales: [locales],
  slug: formattedSlug,
})

// Preview/draft content (no cache)
const { data } = await optimizely.GetStartPage(
  { locales },
  { preview: true }
)

// With cache tag for granular invalidation
const { data } = await optimizely.getHeader(
  { locale: locales },
  { cacheTag: 'optimizely-header' }
)
```

### Fetch Options

```typescript
interface OptimizelyFetchOptions {
  headers?: Record<string, string>
  cache?: RequestCache        // 'force-cache' (default) or 'no-store'
  preview?: boolean           // Enables draft mode, sets no-store
  cacheTag?: string           // Additional cache tag for revalidation
}
```

## Code Generation

After modifying `.graphql` files, regenerate types:

```bash
npm run codegen
# or
npx graphql-codegen
```

This updates `lib/optimizely/types/generated.ts` with:
- TypeScript types for all queries/mutations
- SDK methods matching query names
- Type-safe variables and responses

## Common Patterns

### Filtering by Locale

```graphql
CMSPage(locale: $locales, where: { ... })
```

### URL-based Queries

```graphql
where: { _metadata: { url: { default: { eq: $slug } } } }
```

### Metadata Fields

```graphql
_metadata {
  key
  version
  url {
    default
    hierarchical
    type
  }
}
_modified
```

## Adding a New Block Type

1. **Create fragment** in `lib/optimizely/queries/fragments/Block.graphql`:
   ```graphql
   fragment NewBlockFragment on NewBlock {
     title
     content
   }
   ```

2. **Add to union** in the same file:
   ```graphql
   fragment ItemsInContentArea on _IContent {
     __typename
     ...NewBlockFragment
     # ... other fragments
   }
   ```

3. **Run codegen**: `npm run codegen`

4. **Create component** - see optimizely-blocks skill

5. **Register component** in `components/content-area/block.tsx`
