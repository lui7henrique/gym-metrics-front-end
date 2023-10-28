import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Authentication',
  description: '',
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function AuthenticationLayout({
  children,
}: ExamplesLayoutProps) {
  return (
    <div className="relative hidden h-screen w-screen flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0 ">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />

        <Link
          href="/"
          className="relative z-20 flex items-center text-lg font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Untitled
        </Link>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Nenhum cidadão tem o direito de ser um amador em matéria de
              treinamento físico. Que desgraça é para o homem envelhecer sem
              nunca ver a beleza e a força do que o seu corpo é capaz.
            </p>

            <footer className="text-sm text-muted-foreground">Socrates</footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">{children}</div>
    </div>
  )
}
