import { TextBlock as TextBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'

type TextBlockExtended = TextBlockProps & BlockBase

const widthStyles: Record<string, string> = {
  full: 'w-full',
  small: 'max-w-sm',
  medium: 'max-w-xl',
  large: 'max-w-3xl',
}

const headingSizeStyles: Record<string, string> = {
  small: 'text-xl md:text-2xl',
  medium: 'text-2xl md:text-3xl',
  large: 'text-3xl md:text-4xl',
  extraLarge: 'text-4xl md:text-5xl',
}

export default function TextBlock({
  TextBlockOverline,
  TextBlockHeading,
  TextBlockHeadingSize,
  TextBlockDescription,
  TextCenter,
  TextBlockWidth,
  TextClassName,
}: TextBlockExtended) {
  const width = TextBlockWidth || 'medium'
  const headingSize = TextBlockHeadingSize || 'medium'
  const isCentered = TextCenter === true

  return (
    <div
      className={cn(
        'py-8',
        widthStyles[width] || widthStyles.medium,
        isCentered && 'mx-auto text-center',
        TextClassName
      )}
    >
      {TextBlockOverline && (
        <p
          className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary"
          data-epi-edit="TextBlockOverline"
        >
          {TextBlockOverline}
        </p>
      )}

      {TextBlockHeading && (
        <h2
          className={cn(
            'font-bold text-foreground',
            headingSizeStyles[headingSize] || headingSizeStyles.medium
          )}
          data-epi-edit="TextBlockHeading"
        >
          {TextBlockHeading}
        </h2>
      )}

      {TextBlockDescription?.html && (
        <div
          className="prose prose-lg mt-4 dark:prose-invert"
          data-epi-edit="TextBlockDescription"
          dangerouslySetInnerHTML={{ __html: TextBlockDescription.html }}
        />
      )}
    </div>
  )
}
