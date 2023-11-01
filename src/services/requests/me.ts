import { client } from '../api'

export type User = {
  id: string
  name: string
  email: string
  image: string
}

export const me = async () => {
  const { data } = await client.get<User>('/me')

  return { data }
}
