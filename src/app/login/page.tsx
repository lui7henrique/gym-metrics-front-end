import { Metadata } from 'next'
import Link from 'next/link'
import { UserLoginForm } from './components/user-login-form'

export default function AuthenticationPage() {
  return (
    <>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-start space-y-6 sm:w-[500px]">
          <div className="flex flex-col space-y-2 text-start">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo!
            </h1>

            <p className="px text-start text-sm text-muted-foreground">
              Faça login para acessar sua conta.
            </p>
          </div>

          <UserLoginForm />

          <p className="px text-center text-sm text-muted-foreground">
            Não possui conta? Crie uma agora mesmo, clicando{' '}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              aqui
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
