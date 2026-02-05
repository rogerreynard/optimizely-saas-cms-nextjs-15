import { ArticleListElement as ArticleListElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'

type Props = ArticleListElementProps & BlockBase

export default function ArticleListElement({
  articleListCount,
  topics,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full">
      <div
        className="col-span-full text-center text-muted-foreground"
        data-epi-edit="articleListCount"
      >
        <p className="text-sm">
          Article List Element - Configured to show {articleListCount || 3} articles
        </p>
        {topics && topics.length > 0 && (
          <p className="text-xs mt-2" data-epi-edit="topics">
            Topics: {topics.join(', ')}
          </p>
        )}
      </div>
    </div>
  )
}
