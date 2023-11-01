import { z } from 'zod'

const messages = {
  name: {
    required: 'Nome é obrigatório.',
  },
  email: {
    required: 'E-mail é obrigatório.',
  },
  password: {
    required: 'Senha é obrigatório.',
  },
  confirmPassword: {
    required: 'Confirmação de senha é obrigatório.',
    mismatch: 'As senhas não coincidem.',
  },
}

export const registerFormSchema = z
  .object({
    name: z
      .string({
        required_error: messages.name.required,
      })
      .min(1, messages.name.required),

    email: z
      .string({
        required_error: messages.email.required,
      })
      .min(1, messages.email.required)
      .email(),

    password: z
      .string({
        required_error: messages.password.required,
      })
      .min(1, messages.password.required),

    confirmPassword: z
      .string({
        required_error: messages.password.required,
      })
      .min(1, messages.password.required),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: messages.confirmPassword.mismatch,
    path: ['confirmPassword'],
  })

export type RegisterFormSchemaData = z.infer<typeof registerFormSchema>
