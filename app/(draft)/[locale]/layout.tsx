import '@/app/globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import DraftActions from '@/components/draft/draft-actions'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cms-edit-mode`}
      >
        <Script
          src={`${process.env.NEXT_PUBLIC_CMS_URL}/util/javascript/communicationinjector.js`}
        />
        <DraftActions />
        <Header locale={locale} preview />
        <main className="container mx-auto min-h-screen px-4">{children}</main>
        <Footer locale={locale} preview />
      </body>
    </html>
  )
}
