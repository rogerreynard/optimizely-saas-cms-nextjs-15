'use client'

import { HeadingElement as HeadingElementProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/shared/animated-text'

type HeadingElementExtended = HeadingElementProps & BlockBase

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

const headingTagMap: Record<string, HeadingTag> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  plain: 'p',
}

const headingStyles: Record<string, string> = {
  h1: 'font-bold my-0 text-4xl lg:text-5xl xl:text-6xl',
  h2: 'font-bold my-0 text-3xl lg:text-4xl xl:text-5xl',
  h3: 'font-bold my-0 text-2xl lg:text-3xl xl:text-4xl',
  h4: 'font-bold my-0 text-xl lg:text-2xl xl:text-3xl',
  h5: 'font-bold my-0 text-lg lg:text-xl xl:text-2xl',
  h6: 'font-bold my-0 text-base',
  plain: 'my-0 text-base',
}

const alignStyles: Record<string, string> = {
  left: 'text-left mr-auto',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
  justify: 'text-justify w-full',
}

const transformStyles: Record<string, string> = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  keep: '',
}

const delayValues: Record<string, number> = {
  none: 0,
  short: 500,
  medium: 1000,
  long: 1500,
  verylong: 2000,
}

export default function HeadingElement({
  headingText,
  displaySettings,
  preview,
}: HeadingElementExtended) {
  const headingType =
    displaySettings?.find((s) => s.key === 'headingType')?.value || 'h1'
  const textAlign =
    displaySettings?.find((s) => s.key === 'textAlign')?.value || 'left'
  const transform =
    displaySettings?.find((s) => s.key === 'transform')?.value || 'keep'
  const animated =
    displaySettings?.find((s) => s.key === 'animated')?.value === 'true'
  const delay =
    displaySettings?.find((s) => s.key === 'delay')?.value || 'none'

  const className = cn(
    headingStyles[headingType] || headingStyles.h1,
    alignStyles[textAlign] || alignStyles.left,
    transformStyles[transform] || ''
  )

  const Component = headingTagMap[headingType] || 'h1'

  if (animated && !preview && headingText) {
    return (
      <AnimatedText
        text={headingText}
        el={Component}
        className={className}
        delay={delayValues[delay] || 0}
      />
    )
  }

  return (
    <Component className={className} data-epi-edit="headingText">
      {headingText}
    </Component>
  )
}
