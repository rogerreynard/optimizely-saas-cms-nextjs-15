import { ButtonBlock as ButtonBlockProps } from '@/lib/optimizely/types/generated'
import { BlockBase } from '@/lib/optimizely/types/block'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonBlockExtended = ButtonBlockProps & BlockBase

const typeStyles: Record<string, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
}

const variantStyles: Record<string, string> = {
  default: 'rounded-md px-4 py-2',
  cta: 'rounded-full px-6 py-3 text-lg font-semibold',
}

export default function ButtonBlock({
  ButtonText,
  ButtonUrl,
  ButtonClass,
  ButtonType,
  ButtonVariant,
}: ButtonBlockExtended) {
  const buttonType = ButtonType || 'primary'
  const buttonVariant = ButtonVariant || 'default'
  const url = ButtonUrl?.default || '#'

  const className = cn(
    'inline-flex items-center justify-center font-medium transition-colors',
    typeStyles[buttonType] || typeStyles.primary,
    variantStyles[buttonVariant] || variantStyles.default,
    ButtonClass
  )

  return (
    <Link href={url} className={className} data-epi-edit="ButtonText">
      {ButtonText || 'Click here'}
    </Link>
  )
}
