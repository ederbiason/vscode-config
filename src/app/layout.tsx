import '../styles/global.css'

import { Inter, JetBrains_Mono } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
