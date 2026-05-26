import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veilig & Vrij',
  description: 'Een Nederland waarin iedereen zich veilig genoeg voelt om écht zichzelf te zijn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={manrope.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
