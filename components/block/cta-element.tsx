'use client'

import { CtaElement as CTAElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'

type CTAElementExtended = CTAElementProps & BlockBase

const alignStyles: Record<string, string> = {
  left: 'mr-auto',
  center: 'mx-auto',
  right: 'ml-auto',
  auto: '',
}

export default function CTAElement({
  Text,
  Link: linkUrl,
  displaySettings,
  preview,
}: CTAElementExtended) {
  const align =
    displaySettings?.find((s) => s.key === 'align')?.value || 'auto'
  const animated =
    displaySettings?.find((s) => s.key === 'animated')?.value === 'true'
  const url = linkUrl?.default || '#'

  const className = cn(
    'inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90',
    alignStyles[align] || ''
  )

  const button = (
    <Link href={url} className={className} data-epi-edit="Text">
      {Text || 'Learn More'}
    </Link>
  )

  if (animated && !preview) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn('flex', align === 'center' && 'justify-center')}
      >
        {button}
      </motion.div>
    )
  }

  return (
    <div className={cn('flex', align === 'center' && 'justify-center')}>
      {button}
    </div>
  )
}
