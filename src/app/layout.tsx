import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

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
    <html lang="en">
      <body suppressHydrationWarning className={montserrat.className}>
        {/* SVG Filter for Liquid Glass Effect */}
        <svg className="hidden" aria-hidden="true">
          <defs>
            <filter id="liquid-goo" colorInterpolationFilters="sRGB">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix 
                in="blur" 
                type="matrix" 
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
                result="goo" 
              />
              <feBlend in="SourceGraphic" in2="goo" mode="normal"/>
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  )
}