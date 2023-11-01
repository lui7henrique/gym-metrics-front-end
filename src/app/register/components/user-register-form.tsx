'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFeedback } from '@/hooks/use-feedback'
import { useForm } from 'react-hook-form'
import {
  RegisterFormSchemaData,
  registerFormSchema,
} from './user-register-form-schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ToastAction } from '@/components/ui/toast'
import { api } from '@/services/api'
import { useRouter } from 'next/navigation'

type UserRegisterFormProps = React.HTMLAttributes<HTMLDivElement>

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const { handleSuccess, handleError } = useFeedback()
  const { push } = useRouter()

  const form = useForm<RegisterFormSchemaData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function onSubmit(data: RegisterFormSchemaData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      const response = await api.createUser(data)

      handleSuccess({
        title: 'Conta criada com sucesso 💪',
        description: `Acesse a plataforma!`,
        action: (
          <ToastAction altText="Tentar" onClick={() => push('/login')}>
            Acessar
          </ToastAction>
        ),
      })
    } catch (error) {
      handleError(error, {
        title: 'Não foi possível fazer login.',
        description:
          'Verifique suas credenciais ou tente novamente mais tarde.',
        action: (
          <ToastAction altText="Tentar" onClick={() => onSubmit(data)}>
            Tentar novamente
          </ToastAction>
        ),
      })
    }
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Usuário da Silva Júnior"
                        type="name"
                        autoCapitalize="none"
                        autoComplete="name"
                        autoCorrect="off"
                        disabled={form.formState.isLoading}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="email@exemplo.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={form.formState.isLoading}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="*******"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="password"
                          autoCorrect="off"
                          disabled={form.formState.isLoading}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha de confirmação</FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          placeholder="*******"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="confirmPassword"
                          autoCorrect="off"
                          disabled={form.formState.isLoading}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continuar
            </Button>
          </div>
        </form>

        {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continuar
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{' '}
        Google
      </Button> */}
      </Form>
    </div>
  )
}
