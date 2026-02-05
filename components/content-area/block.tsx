import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Dynamically import each block
const AvailabilityBlock = dynamic(() => import('../block/availability-block'))
const ButtonBlock = dynamic(() => import('../block/button-block'))
const CarouselBlock = dynamic(() => import('../block/carousel-block'))
const ContactBlock = dynamic(() => import('../block/contact-block'))
const CTAElement = dynamic(() => import('../block/cta-element'))
const HeadingElement = dynamic(() => import('../block/heading-element'))
const HeroBlock = dynamic(() => import('../block/hero-block'))
const ImageElement = dynamic(() => import('../block/image-element'))
const LogosBlock = dynamic(() => import('../block/logos-block'))
const ParagraphElement = dynamic(() => import('../block/paragraph-element'))
const PortfolioGridBlock = dynamic(
  () => import('../block/portfolio-grid-block')
)
const ProfileBlock = dynamic(() => import('../block/profile-block'))
const QuoteBlock = dynamic(() => import('../block/quote-block'))
const RichTextElement = dynamic(() => import('../block/rich-text-element'))
const ServicesBlock = dynamic(() => import('../block/services-block'))
const StoryBlock = dynamic(() => import('../block/story-block'))
const TestimonialsBlock = dynamic(() => import('../block/testimonials-block'))
const TextBlock = dynamic(() => import('../block/text-block'))
const VideoElement = dynamic(() => import('../block/video-element'))

// Map the dynamically imported blocks
export const blocks = {
  AvailabilityBlock,
  ButtonBlock,
  CarouselBlock,
  ContactBlock,
  CTAElement,
  HeadingElement,
  HeroBlock,
  ImageElement,
  LogosBlock,
  ParagraphElement,
  PortfolioGridBlock,
  ProfileBlock,
  QuoteBlock,
  RichTextElement,
  ServicesBlock,
  StoryBlock,
  TestimonialsBlock,
  TextBlock,
  VideoElement,
} as const

export default blocksMapperFactory(blocks)
