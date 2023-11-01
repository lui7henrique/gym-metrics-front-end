import { Toast, useToast } from '@/components/ui/use-toast'
import { AxiosError } from 'axios'

type Options = Toast

type DefaultApiError = {
  message: string
  statusCode: number
  error?: string
}

const SHOW_API_MESSAGES = true

export const useFeedback = () => {
  const { toast } = useToast()

  const handleError = (error: unknown, options: Options) => {
    if (SHOW_API_MESSAGES) {
      if (error instanceof AxiosError) {
        const { response } = error
        const apiError = response?.data as DefaultApiError

        if (apiError) {
          const { error, message } = apiError

          return toast({
            ...options,
            variant: 'destructive',
            title: error,
            description: message,
          })
        }
      }
    }

    toast({ ...options, variant: 'destructive' })
  }

  const handleSuccess = (options: Options) => {
    toast({ ...options })
  }

  return { handleError, handleSuccess }
}
