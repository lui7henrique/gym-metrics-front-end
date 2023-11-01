import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthContextProvider } from '@/context/auth'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gym',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          montserrat.className,
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>

        <Toaster />
      </body>
    </html>
  )
}
