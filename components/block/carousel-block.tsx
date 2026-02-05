'use client'

import {
  CarouselBlock as CarouselBlockProps,
  ImageElement as ImageElementType,
  HeadingElement as HeadingElementType,
  ParagraphElement as ParagraphElementType,
  CtaElement as CTAElementType,
} from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const ImageElement = dynamic(() => import('./image-element'))
const HeadingElement = dynamic(() => import('./heading-element'))
const ParagraphElement = dynamic(() => import('./paragraph-element'))
const CTAElement = dynamic(() => import('./cta-element'))

type CarouselBlockExtended = CarouselBlockProps & BlockBase

type CarouselItem = {
  __typename?: string
} & (ImageElementType | HeadingElementType | ParagraphElementType | CTAElementType)

export default function CarouselBlock({
  CarouselItemsContentArea,
  preview,
}: CarouselBlockExtended) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = (CarouselItemsContentArea || []) as CarouselItem[]

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }, [items.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }, [items.length])

  if (!items.length) {
    return null
  }

  const renderItem = (item: CarouselItem, index: number) => {
    if (!item) return null

    const baseProps = { isFirst: index === 0, preview: preview || false }

    switch (item.__typename) {
      case 'ImageElement':
        return <ImageElement key={index} {...item} {...baseProps} />
      case 'HeadingElement':
        return <HeadingElement key={index} {...item} {...baseProps} />
      case 'ParagraphElement':
        return <ParagraphElement key={index} {...item} {...baseProps} />
      case 'CTAElement':
        return <CTAElement key={index} {...item} {...baseProps} />
      default:
        return null
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderItem(items[currentIndex], currentIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-colors hover:bg-background',
              'focus:outline-none focus:ring-2 focus:ring-primary'
            )}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-colors hover:bg-background',
              'focus:outline-none focus:ring-2 focus:ring-primary'
            )}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors',
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
