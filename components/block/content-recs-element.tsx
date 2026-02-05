import { ContentRecsElement as ContentRecsElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'

type Props = ContentRecsElementProps & BlockBase

export default function ContentRecsElement({
  ElementDeliveryApiKey,
  ElementRecommendationCount,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full">
      <div
        className="col-span-full text-center text-muted-foreground"
        data-epi-edit="ElementRecommendationCount"
      >
        <p className="text-sm">
          Content Recommendations - Configured to show{' '}
          {ElementRecommendationCount || 3} recommendations
        </p>
        {ElementDeliveryApiKey && (
          <p className="text-xs mt-2 text-muted-foreground">
            API Key configured
          </p>
        )}
      </div>
    </div>
  )
}
