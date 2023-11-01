import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acessar conta',
  description: '',
}

interface LoginLayoutProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="relative grid h-screen w-screen flex-col items-center justify-center px-4 md:grid lg:grid-cols-2 lg:px-0 ">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />

        <Link
          href="/"
          className="relative z-20 flex items-center text-lg font-medium"
        >
          💪 Untitled
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
