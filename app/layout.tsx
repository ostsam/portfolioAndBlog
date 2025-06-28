import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { baseUrl } from './sitemap'
import ClientLayoutWrapper from './components/client-layout-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sam Ost-Prassad',
    template: '%s | Sam Ost-Prassad',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Sam Ost-Prassad',
    description: 'Developer, writer, and creator.',
    url: baseUrl,
    siteName: 'Sam Ost-Prassad',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
