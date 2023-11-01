import Link from 'next/link'

import { UserRegisterForm } from './components/user-register-form'

export default function RegisterPage() {
  return (
    <div className="mx-auto flex w-full flex-col gap-4 sm:w-[500px]">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Criar uma conta
        </h1>

        <p className="text-sm text-muted-foreground">
          Já possuí uma conta? Acesse clicando{' '}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            aqui.
          </Link>
        </p>
      </div>

      <UserRegisterForm />

      <p className="px-8 text-center text-sm text-muted-foreground">
        Clicando em continuar, você concorda com os{' '}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Termos de Uso
        </Link>{' '}
        e{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Politicas de privacidade
        </Link>
        .
      </p>
    </div>
  )
}
