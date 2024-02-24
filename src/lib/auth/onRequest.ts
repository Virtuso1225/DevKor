import { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES } from '@/data/messages'
import { getNewToken } from '@/api/hooks/refresh'

export const onRequest = async (config: InternalAxiosRequestConfig, loginSatus: boolean) => {
  const refreshToken = localStorage.getItem('refreshToken')
  const isTokenExpired = new Date(localStorage.getItem('expiresAt')!) < new Date()
  if (!loginSatus) return config
  if (isTokenExpired) {
    const response = await getNewToken(refreshToken!)
    localStorage.setItem('accessToken', response.accessToken)
    localStorage.setItem('expiresAt', response.expiresAt.toString())
    config.headers.Authorization = response.accessToken
  } else {
    config.headers.Authorization = localStorage.getItem('accessToken')
  }
  return config
}

export const handleRequestError = (error: Error) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 401) {
      toast({ variant: 'destructive', title: '로그인이 만료되었습니다. 다시 로그인 해주세요.' })
    } else {
      toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
    }
  }
  localStorage.clear()
}
