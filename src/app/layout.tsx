import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Finmile - The OS for Modern Logistics',
  description: 'Agentic AI to optimise multi drop routes in seconds and deliver full operational visibility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} ${montserrat.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}