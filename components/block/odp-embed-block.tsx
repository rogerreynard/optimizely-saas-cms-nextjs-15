import { OdpEmbedBlock as OdpEmbedBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'

type Props = OdpEmbedBlockProps & BlockBase

export default function OdpEmbedBlock({ ContentId }: Props) {
  if (!ContentId) {
    return (
      <div
        className="odp-embed-block empty-odp-embed-block text-center text-muted-foreground p-4"
        data-epi-edit="ContentId"
      >
        <p className="text-sm">ODP Embed Block - No Content ID configured</p>
      </div>
    )
  }

  return (
    <div
      className="odp-embed-block w-full overflow-hidden rounded-lg"
      data-epi-edit="ContentId"
    >
      <p className="text-sm text-muted-foreground text-center p-4">
        ODP Embed - Content ID: {ContentId}
      </p>
    </div>
  )
}
