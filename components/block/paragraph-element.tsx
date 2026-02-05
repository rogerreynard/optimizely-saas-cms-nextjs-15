import { ParagraphElement as ParagraphElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'

type ParagraphElementExtended = ParagraphElementProps & BlockBase

const alignStyles: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const widthStyles: Record<string, string> = {
  full: 'w-full',
  default: 'max-w-prose mx-auto',
}

export default function ParagraphElement({
  text,
  displaySettings,
}: ParagraphElementExtended) {
  const textAlign =
    displaySettings?.find((s) => s.key === 'textAlign')?.value || 'left'
  const width =
    displaySettings?.find((s) => s.key === 'width')?.value || 'default'

  const className = cn(
    'prose prose-lg dark:prose-invert',
    alignStyles[textAlign] || alignStyles.left,
    widthStyles[width] || widthStyles.default
  )

  if (!text?.html) {
    return null
  }

  return (
    <div
      className={className}
      data-epi-edit="text"
      dangerouslySetInnerHTML={{ __html: text.html }}
    />
  )
}
