import { client } from '../api'

export type AuthenticateBody = {
  email: string
  password: string
}

type AuthenticateResponse = {
  access_token: string
}

export const authenticate = async (body: AuthenticateBody) => {
  const { data } = await client.post<AuthenticateResponse>('/sessions', body)

  return { data }
}
