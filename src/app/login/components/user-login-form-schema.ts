import { z } from 'zod'

const messages = {
  email: {
    required: '• E-mail é obrigatório.',
    valid: '• Insira um e-mail válido.',
  },
  password: {
    required: '• Senha é obrigatória.',
  },
}

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: messages.email.required,
    })
    .min(1, messages.email.required)
    .email(messages.email.valid),

  password: z
    .string({
      required_error: messages.password.required,
    })
    .min(1, messages.password.required),
})

export type LoginFormSchemaData = z.infer<typeof loginFormSchema>
