# Optimizely Pages Skill

This skill teaches Claude how to create Next.js pages that integrate with Optimizely SaaS CMS.

## Route Structure

```
app/
├── (site)/                    # Published content route group
│   └── [locale]/              # Locale dynamic segment
│       ├── layout.tsx         # Site layout with header/footer
│       ├── page.tsx           # Home page (StartPage)
│       ├── [slug]/
│       │   └── page.tsx       # CMS pages and experiences
│       └── not-found.tsx
├── (draft)/                   # Preview/draft route group
│   └── [locale]/
│       └── draft/
│           └── [version]/     # Version-specific preview
│               ├── page.tsx   # Home preview
│               ├── [slug]/    # Page preview
│               ├── block/[key]/ # Single block preview
│               └── experience/[key]/ # Experience preview
└── api/
    ├── draft/                 # Draft mode API
    │   ├── route.ts           # Enable draft mode
    │   └── disable/route.ts   # Disable draft mode
    └── revalidate/route.ts    # Cache invalidation webhook
```

## Page Component Pattern

### Template

```tsx
import ContentAreaMapper from '@/components/content-area/mapper'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

// Generate metadata for SEO
export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug?: string }>
}): Promise<Metadata> {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)

  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: `/${slug}`,
  })

  if (errors || !data?.CMSPage?.item) {
    return {}
  }

  const page = data.CMSPage.item
  return {
    title: page.title,
    description: page.shortDescription || '',
    keywords: page.keywords ?? '',
    alternates: generateAlternates(locale, `/${slug}`),
  }
}

// Generate static paths for SSG
export async function generateStaticParams() {
  try {
    const { data } = await optimizely.AllPages({ pageType: ['CMSPage'] })
    const paths = data?._Content?.items ?? []

    return paths
      .filter((p) => p?._metadata?.url?.default)
      .map((p) => ({
        slug: p._metadata.url.default.replace(/^\//, ''),
      }))
  } catch (e) {
    console.error(e)
    return []
  }
}

// Page component
export default async function CmsPage(props: {
  params: Promise<{ locale: string; slug?: string }>
}) {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const { isEnabled: isDraftModeEnabled } = await draftMode()

  // Handle draft mode
  if (isDraftModeEnabled) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DraftModePage locales={locales} slug={`/${slug}`} />
      </Suspense>
    )
  }

  // Fetch published content
  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: `/${slug}`,
  })

  if (errors || !data?.CMSPage?.item) {
    return notFound()
  }

  const page = data.CMSPage.item
  const blocks = (page?.blocks ?? []).filter(Boolean)

  return (
    <Suspense>
      <ContentAreaMapper blocks={blocks} />
    </Suspense>
  )
}
```

## Draft Mode Pattern

### Checking Draft Mode

```tsx
import { draftMode } from 'next/headers'

const { isEnabled: isDraftModeEnabled } = await draftMode()

if (isDraftModeEnabled) {
  // Render draft version
}
```

### Draft Mode Components

For draft content, use dedicated components that fetch ALL versions:

```tsx
// components/draft/draft-mode-cms-page.tsx
export default async function DraftModeCmsPage({
  locales,
  slug,
}: {
  locales: Locales
  slug: string
}) {
  const { data, errors } = await optimizely.GetAllPagesVersionByURL(
    { locales: [locales], slug },
    { preview: true }  // Enables preview auth and no-cache
  )

  const items = data?.CMSPage?.items

  // Find the highest version
  const maxVersion = items
    ? Math.max(...items.map(i => parseInt(i?._metadata?.version || '0')))
    : -1

  const page = items?.find(
    p => parseInt(p?._metadata?.version || '0') === maxVersion
  )

  // Render...
}
```

## Layout Pattern

```tsx
// app/(site)/[locale]/layout.tsx
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { LOCALES } from '@/lib/optimizely/utils/language'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <main className="container mx-auto min-h-screen px-4">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
```

## Metadata Generation

```tsx
import { generateAlternates } from '@/lib/utils/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug?: string }>
}): Promise<Metadata> {
  const { locale, slug = '' } = await props.params

  // Fetch page data...

  return {
    title: page.title,
    description: page.shortDescription || '',
    keywords: page.keywords ?? '',
    alternates: generateAlternates(locale, `/${slug}`),
  }
}
```

## Visual Builder / Experience Pages

```tsx
import VisualBuilderExperienceWrapper from '@/components/visual-builder/wrapper'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'

// If CMSPage not found, try Visual Builder Experience
const experienceData = await optimizely.GetVisualBuilderBySlug({
  locales: [locales],
  slug: formattedSlug,
})

const experience = experienceData.data?.SEOExperience?.item as
  | SafeVisualBuilderExperience
  | undefined

if (experience) {
  return (
    <Suspense>
      <VisualBuilderExperienceWrapper experience={experience} />
    </Suspense>
  )
}
```

## Key Patterns

1. **Await params**: In Next.js 15, params is a Promise: `await props.params`
2. **Use getValidLocale**: Always validate locale with helper
3. **Handle draft mode first**: Check and handle before fetching published
4. **Fallback to experiences**: Try Visual Builder if CMSPage not found
5. **Use Suspense**: Wrap async components in Suspense
6. **Return notFound()**: Use Next.js notFound for 404s
7. **Filter null blocks**: `blocks.filter(Boolean)` before rendering
