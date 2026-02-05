import { MegaMenuGroupBlock as MegaMenuGroupBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import Link from 'next/link'

type Props = MegaMenuGroupBlockProps & BlockBase

export default function MegaMenuGroupBlock({
  MenuMenuHeading,
  MegaMenuUrl,
  _metadata,
}: Props) {
  const menuName =
    MenuMenuHeading || _metadata?.displayName || 'Unnamed menu entry'
  const menuUrl = MegaMenuUrl?.default

  return (
    <div className="mega-menu-group-block">
      {menuUrl ? (
        <Link
          href={menuUrl}
          className="px-2 xl:px-4 font-semibold hover:text-primary transition-colors"
          data-epi-edit="MenuMenuHeading"
        >
          {menuName}
        </Link>
      ) : (
        <span
          className="px-2 xl:px-4 font-semibold"
          data-epi-edit="MenuMenuHeading"
        >
          {menuName}
        </span>
      )}
    </div>
  )
}
