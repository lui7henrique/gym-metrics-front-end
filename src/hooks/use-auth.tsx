import { api, client } from '@/services/api'
import { AuthenticateBody } from '@/services/requests'
import { useFeedback } from './use-feedback'
import { ToastAction } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'

export const useAuth = () => {
  const { handleSuccess, handleError } = useFeedback()

  const { push } = useRouter()

  const handleAuthenticate = async (
    body: AuthenticateBody,
    onTryAgain: () => void,
  ) => {
    try {
      const { data } = await api.authenticate(body)

      client.defaults.headers.Authorization = `Bearer ${data.access_token}`

      handleSuccess({
        title: 'Bem-vindo 💪',
        description: `Login feito com sucesso! Continue explorando.`,
      })

      push('/app')
    } catch (error) {
      handleError(error, {
        title: 'Não foi possível fazer login.',
        description:
          'Verifique suas credenciais ou tente novamente mais tarde.',
        action: (
          <ToastAction altText="Tentar" onClick={onTryAgain}>
            Tentar novamente
          </ToastAction>
        ),
      })
    }
  }

  return { handleAuthenticate }
}
