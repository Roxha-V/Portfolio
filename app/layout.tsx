import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

export const metadata: Metadata = {
  title: 'Roxha Dev - Portfolio',
  description: 'Rocio Valverde - Desarrolladora Frontend - Portfolio',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ],
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
