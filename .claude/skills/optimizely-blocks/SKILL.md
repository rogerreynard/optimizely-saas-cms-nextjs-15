# Optimizely Block Components Skill

This skill teaches Claude how to create new block components for this Optimizely SaaS CMS project.

## Pattern Overview

Blocks in this project follow a consistent pattern:
1. Block component in `components/block/`
2. GraphQL fragment in `lib/optimizely/queries/fragments/Block.graphql`
3. Registration in `components/content-area/block.tsx`
4. Types auto-generated via GraphQL Codegen

## Block Component Pattern

### File Location
`components/block/{block-name}.tsx`

### Naming Convention
- File: `kebab-case` (e.g., `hero-block.tsx`)
- Component: `PascalCase` (e.g., `HeroBlock`)
- Props type: Import from generated types

### Template

```tsx
import { {BlockName} as {BlockName}Props } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'

type {BlockName}PropsExtended = {BlockName}Props & BlockBase

export default function {BlockName}({
  // destructure props from the generated type
  propertyName,
  isFirst,      // from BlockBase - indicates first block in content area
  displaySettings, // from BlockBase - Visual Builder display settings
}: {BlockName}PropsExtended) {
  return (
    <section className="container mx-auto px-4 py-16">
      {/*
        Use data-epi-edit="propertyName" for on-page editing support
      */}
      <h2 data-epi-edit="propertyName">{propertyName}</h2>
    </section>
  )
}
```

## Real Examples from Codebase

### Simple Block (HeroBlock)

```tsx
import { HeroBlock as HeroBlockProps } from '@/lib/optimizely/types/generated'
import { cn } from '@/lib/utils'

export default function HeroBlock({
  title,
  subtitle,
  showDecoration = true,
  decorationColorsPrimary = '#009379',
  decorationColorsSecondary = '#ffd285',
}: HeroBlockProps) {
  return (
    <section className="container relative mx-auto px-4 pb-16 pt-20">
      <div className={cn('flex flex-col', { 'sm:pr-60': showDecoration })}>
        <h1
          className="mb-4 w-full max-w-xl text-4xl font-bold md:text-6xl"
          data-epi-edit="title"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mb-8 max-w-xl text-xl text-muted-foreground"
            data-epi-edit="subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
```

### Block with Display Settings (ProfileBlock)

```tsx
import { ProfileBlock as ProfileBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cva } from 'class-variance-authority'

type ProfileBlockPropsV2 = ProfileBlockProps & BlockBase

const backgroundVariants = cva('container mx-auto px-4 py-16', {
  variants: {
    colorScheme: {
      default: 'border-none bg-[#f9e6f0] text-[#2d2d2d]',
      primary: 'border-none bg-primary text-white',
      secondary: 'border-none bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    colorScheme: 'default',
  },
})

export default function ProfileBlock({
  imageSrc,
  name,
  title,
  bio,
  isFirst,
  displaySettings,
}: ProfileBlockPropsV2) {
  // Extract display settings value
  const colorScheme =
    displaySettings?.find((setting) => setting.key === 'colorScheme')?.value ||
    'default'

  return (
    <section className={backgroundVariants({
      colorScheme: colorScheme as 'default' | 'primary' | 'secondary',
    })}>
      {/* Block content */}
    </section>
  )
}
```

## BlockBase Interface

```typescript
export interface BlockBase {
  isFirst: boolean          // First block in content area
  preview: boolean          // Draft mode preview
  displaySettings?: {       // Visual Builder display settings
    value: string
    key: string
  }[]
}
```

## Registration Pattern

After creating a block, register it in `components/content-area/block.tsx`:

```tsx
import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Add dynamic import for new block
const NewBlock = dynamic(() => import('../block/new-block'))

// Add to blocks map
export const blocks = {
  // ... existing blocks
  NewBlock, // Key MUST match GraphQL __typename
} as const

export default blocksMapperFactory(blocks)
```

## Key Patterns

1. **Import types from generated**: Always import props types from `@/lib/optimizely/types/generated`
2. **Use data-epi-edit**: Add `data-epi-edit="propertyName"` for on-page editing
3. **Handle isFirst**: Use `isFirst` prop for priority loading of images
4. **DisplaySettings**: Extract values from `displaySettings` array for Visual Builder styling
5. **Default values**: Provide sensible defaults for optional properties
6. **Tailwind styling**: Use Tailwind CSS with `cn()` helper for conditional classes
7. **Dynamic imports**: Use `next/dynamic` for code splitting in block registry
