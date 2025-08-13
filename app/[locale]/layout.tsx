import type { Metadata } from 'next'
import '../globals.css'

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
  },
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
    
          {children}

      </body>
    </html>
  )
} 