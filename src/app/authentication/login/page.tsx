import { Metadata } from 'next'
import Link from 'next/link'
import { UserLoginForm } from './components/user-login-form'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo!
            </h1>

            <p className="px-8 text-center text-sm text-muted-foreground">
              Faça login para acessar sua conta.
            </p>
          </div>

          <UserLoginForm />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Não possui conta? Crie uma agora mesmo, clicando{' '}
            <Link
              href="/authentication/register"
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
