import '../styles/global.css'

import { Inter, JetBrains_Mono } from '@next/font/google'

import { Header } from '@/components/Header'

import { Explorer } from '@/components/Explorer'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

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
      <body className="bg-[#7F7FD5 bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              <Explorer />

              <div>
                {children}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
