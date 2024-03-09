import axios, { type AxiosResponse } from 'axios'
import type { LoginResponse } from '@/api/types/auth'


export const getNewToken = async (refreshToken: string) => {
  const response = await axios.post<null, AxiosResponse<Omit<LoginResponse, 'refreshToken'>>>(
    'http://localhost:8080/refresh',
    { refreshToken: refreshToken, username: localStorage.getItem('user') }
  )
  return response.data
}
