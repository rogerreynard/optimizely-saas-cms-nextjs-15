import { TestimonialElement as TestimonialElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import Image from 'next/image'

type Props = TestimonialElementProps & BlockBase

export default function TestimonialElement({
  referenceText,
  customerImage,
  customerLocation,
  customerName,
}: Props) {
  const imageUrl = customerImage?.url?.default

  return (
    <figure className="testimonial">
      {referenceText?.html && (
        <blockquote
          className="prose prose-lg m-0 p-0 border-l-0"
          data-epi-edit="referenceText"
          dangerouslySetInnerHTML={{ __html: referenceText.html }}
        />
      )}
      <figcaption>
        <cite className="ml-4 lg:flex lg:justify-start lg:items-center not-italic">
          <p
            className="whitespace-nowrap align-middle mt-0 mb-2 lg:mb-0"
            data-epi-edit="customerName"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={customerName || ''}
                width={48}
                height={48}
                className="rounded-full h-12 w-12 mr-3 inline-block"
                data-epi-edit="customerImage"
              />
            )}
            {customerName || ''}
          </p>
          {customerLocation && (
            <>
              <span className="mx-2 hidden lg:inline-block">&mdash;</span>
              <p
                className="text-sm lg:text-base my-0"
                data-epi-edit="customerLocation"
              >
                {customerLocation}
              </p>
            </>
          )}
        </cite>
      </figcaption>
    </figure>
  )
}
