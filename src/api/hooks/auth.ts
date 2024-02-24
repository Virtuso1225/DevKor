import type { LoginRequest, LoginResponse } from '@/api/types/auth'
import { toast } from '@/components/ui/use-toast'
import { AUTH_MESSAGES, COMMON_MESSAGES } from '@/data/messages'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { axiosPost } from '@/api/hooks/https'
import { useSetAtom } from 'jotai/react'
import { handleLoginStore } from '@/store/atom'

const login = async ({ username, password }: LoginRequest) => {
  const response = await axiosPost<LoginRequest, LoginResponse>('/login', { username, password })
  return response.data
}
export const useLogin = (username: string) => {
  const navigate = useNavigate()
  const setLoginStorage = useSetAtom(handleLoginStore)
  return useMutation({
    mutationFn: login,
    onSuccess: response => {
      setLoginStorage(true)
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      localStorage.setItem('user', username)
      localStorage.setItem('expiresAt', response.data.expiresAt.toString())
      // localStorage.setItem('isLoggedIn', 'true')
      toast({ title: response.message })
      navigate('/')
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

const logout = async () => {
  const response = await axiosPost<null, null>(`/logout`)
  return response.data
}

export const useLogout = () => {
  const navigate = useNavigate()
  const setLoginStorage = useSetAtom(handleLoginStore)

  return useMutation({
    mutationFn: logout,
    onSuccess: response => {
      setLoginStorage(false)
      localStorage.clear()
      toast({ title: response.message })
      navigate('/')
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
