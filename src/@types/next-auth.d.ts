import { User } from '@/services/requests'

declare module 'next-auth' {
  interface Session {
    user: any
  }

  interface User {
    id: string
    name: string
    email: string
    image: string
  }
}
