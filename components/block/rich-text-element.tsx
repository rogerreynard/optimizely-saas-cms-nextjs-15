import { RichTextElement as RichTextElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'

type RichTextElementExtended = RichTextElementProps & BlockBase

const widthStyles: Record<string, string> = {
  full: 'w-full',
  default: 'max-w-prose mx-auto',
  defaultLeft: 'max-w-prose mr-auto',
  defaultRight: 'max-w-prose ml-auto',
}

export default function RichTextElement({
  text,
  displaySettings,
}: RichTextElementExtended) {
  const width =
    displaySettings?.find((s) => s.key === 'width')?.value || 'default'

  const className = cn(
    'prose prose-lg dark:prose-invert',
    widthStyles[width] || widthStyles.default
  )

  if (!text?.html) {
    return null
  }

  return (
    <div
      className={className}
      data-epi-edit="text"
      data-component="rich-text-element"
      dangerouslySetInnerHTML={{ __html: text.html }}
    />
  )
}
