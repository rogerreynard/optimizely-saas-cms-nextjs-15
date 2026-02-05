import { VideoElement as VideoElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'

type VideoElementExtended = VideoElementProps & BlockBase

const aspectRatioStyles: Record<string, string> = {
  auto: '',
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '9:16': 'aspect-[9/16]',
}

const roundedStyles: Record<string, string> = {
  none: 'rounded-none',
  small: 'rounded-sm',
  medium: 'rounded-md',
  large: 'rounded-lg',
  huge: 'rounded-2xl',
  full: 'rounded-full',
}

export default function VideoElement({
  title,
  video,
  placeholder,
  displaySettings,
}: VideoElementExtended) {
  const aspectRatio =
    displaySettings?.find((s) => s.key === 'aspectRatio')?.value || '16:9'
  const rounded =
    displaySettings?.find((s) => s.key === 'rounded')?.value || 'medium'
  const autoPlay =
    displaySettings?.find((s) => s.key === 'autoPlay')?.value === 'true'
  const loop =
    displaySettings?.find((s) => s.key === 'loop')?.value === 'true'
  const muted =
    displaySettings?.find((s) => s.key === 'muted')?.value === 'true'
  const showControls =
    displaySettings?.find((s) => s.key === 'showControls')?.value !== 'false'

  const videoUrl = video?.url?.default
  const placeholderUrl = placeholder?.url?.default

  if (!videoUrl) {
    return null
  }

  return (
    <div
      className={cn(
        'overflow-hidden',
        aspectRatioStyles[aspectRatio] || aspectRatioStyles['16:9'],
        roundedStyles[rounded] || roundedStyles.medium
      )}
    >
      <video
        src={videoUrl}
        poster={placeholderUrl || undefined}
        title={title || undefined}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted || autoPlay}
        controls={showControls}
        playsInline
        className="h-full w-full object-cover"
        data-epi-edit="video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
