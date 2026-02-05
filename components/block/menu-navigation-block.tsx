import { MenuNavigationBlock as MenuNavigationBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import Link from 'next/link'

type Props = MenuNavigationBlockProps & BlockBase

export default function MenuNavigationBlock({
  MenuNavigationHeading,
  NavigationLinks,
  _metadata,
}: Props) {
  const heading =
    MenuNavigationHeading || _metadata?.displayName || 'Navigation'

  return (
    <nav className="menu-navigation-block">
      <div
        className="pb-1 uppercase font-bold text-sm"
        data-epi-edit="MenuNavigationHeading"
      >
        {heading}
      </div>
      <ul className="space-y-1" data-epi-edit="NavigationLinks">
        {NavigationLinks?.map((link, index) => {
          if (!link?.url?.default) return null
          const linkKey = `${link.text || ''}::${link.url.default}::${index}`

          return (
            <li key={linkKey}>
              <Link
                href={link.url.default}
                className="inline-block py-1 hover:text-primary transition-colors"
                title={link.title || undefined}
                target={link.target || undefined}
              >
                {link.text || link.title || 'Unnamed link'}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
