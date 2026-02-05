import { QuoteBlock as QuoteBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type QuoteBlockExtended = QuoteBlockProps & BlockBase

const colorStyles: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-500 dark:bg-blue-950',
  orange: 'bg-orange-50 border-orange-500 dark:bg-orange-950',
  green: 'bg-green-50 border-green-500 dark:bg-green-950',
  red: 'bg-red-50 border-red-500 dark:bg-red-950',
  white: 'bg-white border-gray-200 dark:bg-gray-900',
}

export default function QuoteBlock({
  QuoteText,
  QuoteColor,
  QuoteActive,
  QuoteProfileName,
  QuoteProfilePicture,
  QuoteProfileLocation,
}: QuoteBlockExtended) {
  const color = QuoteColor || 'white'
  const profilePictureUrl = QuoteProfilePicture?.url?.default

  return (
    <figure
      className={cn(
        'relative rounded-lg border-l-4 p-6',
        colorStyles[color] || colorStyles.white,
        QuoteActive && 'ring-2 ring-primary ring-offset-2'
      )}
    >
      {QuoteText && (
        <blockquote
          className="prose prose-lg italic text-foreground dark:prose-invert"
          data-epi-edit="QuoteText"
        >
          <p>&ldquo;{QuoteText}&rdquo;</p>
        </blockquote>
      )}

      <figcaption className="mt-4 flex items-center gap-4">
        {profilePictureUrl && (
          <Image
            src={profilePictureUrl}
            alt={QuoteProfileName || 'Profile'}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}

        <div>
          {QuoteProfileName && (
            <cite
              className="not-italic font-semibold text-foreground"
              data-epi-edit="QuoteProfileName"
            >
              {QuoteProfileName}
            </cite>
          )}

          {QuoteProfileLocation && (
            <p
              className="text-sm text-muted-foreground"
              data-epi-edit="QuoteProfileLocation"
            >
              {QuoteProfileLocation}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
