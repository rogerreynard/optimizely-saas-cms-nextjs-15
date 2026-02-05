'use client'

import { ImageElement as ImageElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ImageElementExtended = ImageElementProps & BlockBase

const aspectRatioStyles: Record<string, string> = {
  auto: '',
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '9:16': 'aspect-[9/16]',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
}

const roundedStyles: Record<string, string> = {
  none: 'rounded-none',
  small: 'rounded-sm',
  medium: 'rounded-md',
  large: 'rounded-lg',
  huge: 'rounded-2xl',
  full: 'rounded-full',
}

export default function ImageElement({
  altText,
  imageLink,
  displaySettings,
  isFirst,
  preview,
}: ImageElementExtended) {
  const aspectRatio =
    displaySettings?.find((s) => s.key === 'aspectRatio')?.value || 'auto'
  const rounded =
    displaySettings?.find((s) => s.key === 'rounded')?.value || 'medium'
  const animated =
    displaySettings?.find((s) => s.key === 'animated')?.value === 'true'

  const imageUrl = imageLink?.url?.default

  if (!imageUrl) {
    return null
  }

  const imageComponent = (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatioStyles[aspectRatio] || '',
        roundedStyles[rounded] || roundedStyles.medium
      )}
    >
      <Image
        src={imageUrl}
        alt={altText || ''}
        fill={aspectRatio !== 'auto'}
        width={aspectRatio === 'auto' ? 800 : undefined}
        height={aspectRatio === 'auto' ? 600 : undefined}
        className={cn(
          aspectRatio !== 'auto' ? 'object-cover' : 'h-auto w-full'
        )}
        priority={isFirst}
        data-epi-edit="imageLink"
      />
    </div>
  )

  if (animated && !preview) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {imageComponent}
      </motion.div>
    )
  }

  return imageComponent
}
