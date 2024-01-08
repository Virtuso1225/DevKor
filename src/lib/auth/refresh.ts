import { getRefreshToken, removeRefreshToken } from '@/lib/auth/cookies'
import axios, { type AxiosResponse, type AxiosRequestConfig, AxiosError } from 'axios'
import type { LoginResponse } from '@/api/types/auth'
import API from '@/lib/auth/customApi'
import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES } from '@/data/messages'

export const useRefresh = async (config: AxiosRequestConfig) => {
  const refreshToken = getRefreshToken()
  const isTokenExpired = new Date(localStorage.getItem('expiresAt')!) < new Date()
  if (isTokenExpired) {
    const response = await axios.post<null, AxiosResponse<Omit<LoginResponse, 'refreshToken'>>>(
      'http://localhost:8080/refresh',
      { refreshToken: refreshToken, username: localStorage.getItem('user') }
    )
    config.headers!.Authorization = response.data.accessToken
    API.defaults.headers.common['Authorization'] = response.data.accessToken
    localStorage.setItem('expiresAt', response.data.expiresAt.toString())
  }
  return config
}

export const handleRefreshError = (error: Error) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 401) {
      toast({ variant: 'destructive', title: '로그인이 만료되었습니다. 다시 로그인 해주세요.' })
    } else {
      toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
    }
  }
  removeRefreshToken()
  localStorage.removeItem('user')
  localStorage.removeItem('expiresAt')
  localStorage.removeItem('isLoggedIn')
}
