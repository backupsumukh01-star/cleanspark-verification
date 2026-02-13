import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanSpark Mining (CLSM)',
  description:
    'CleanSpark Mining (CLSM) is a BEP-20 utility token deployed on BNB Smart Chain, designed for simple wallet-to-wallet transfers with a fixed supply.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
