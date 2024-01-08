import type { LoginResponse } from '@/api/types/auth'
import { toast } from '@/components/ui/use-toast'
import { AUTH_MESSAGES, COMMON_MESSAGES } from '@/data/messages'
import API from '@/lib/auth/customApi'
import { authToken } from '@/recoil/atom'
import { useMutation } from '@tanstack/react-query'

import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'

export const getNewToken = async (refreshToken: string) => {
  const response = await axios.post<null, AxiosResponse<Omit<LoginResponse, 'refreshToken'>>>(
    'http://localhost:8080/refresh',
    { refreshToken: refreshToken, username: localStorage.getItem('user') }
  )
  return response.data
}

export const useSilentRefresh = () => {
  const setToken = useSetRecoilState(authToken)
  return useMutation({
    mutationFn: getNewToken,
    onSuccess: data => {
      API.defaults.headers.common['Authorization'] = data.accessToken
      localStorage.setItem('expiresAt', data.expiresAt.toString())
      localStorage.setItem('isLoggedIn', 'true')
      setToken(data.accessToken)
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message ?? AUTH_MESSAGES.SERVER_ERROR
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}
