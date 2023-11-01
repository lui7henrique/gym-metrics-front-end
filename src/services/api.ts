import axios from 'axios'

import { createUser, authenticate, me } from './requests'

const baseURL = process.env.NEXT_PUBLIC_API_URL || ''

export const client = axios.create({
  baseURL,
})

export const api = {
  createUser,
  authenticate,
  me,
}
