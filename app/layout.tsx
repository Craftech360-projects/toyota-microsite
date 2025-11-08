import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const toyotaFont = localFont({
  src: '../public/fonts/ToyotaType-Bold.ttf',
  variable: '--font-toyota',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${toyotaFont.variable} font-toyota antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
