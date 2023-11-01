import { client } from '../api'

type CreateUserBody = { name: string; email: string; password: string }

export const createUser = async (body: CreateUserBody) => {
  const { data } = await client.post('/user', body)
  return data
}
