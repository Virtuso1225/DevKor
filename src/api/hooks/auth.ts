import type { LoginRequest, LoginResponse } from '@/api/types/auth'
import { toast } from '@/components/ui/use-toast'
import { AUTH_MESSAGES, COMMON_MESSAGES } from '@/data/messages'
import { authToken } from '@/recoil/atom'
import { removeRefreshToken, setRefreshToken } from '@/lib/auth/cookies'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import API from '@/lib/auth/customApi'

const login = async ({ username, password }: LoginRequest) => {
  const response = await axios.post<LoginResponse, AxiosResponse<LoginResponse>, LoginRequest>(
    `http://localhost:8080/login`,
    {
      username,
      password
    }
  )
  return response.data
}

export const useLogin = (username: string) => {
  const setToken = useSetRecoilState(authToken)
  const navigate = useNavigate()
  return useMutation({
    mutationFn: login,
    onSuccess: data => {
      API.defaults.headers.common['Authorization'] = data.accessToken
      setToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      localStorage.setItem('user', username)
      localStorage.setItem('expiresAt', data.expiresAt.toString())
      localStorage.setItem('isLoggedIn', 'true')
      toast({ title: '로그인 성공' })
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
  const response = await API.post<null, AxiosResponse<null>>(`/logout`)
  return response.data
}

export const useLogout = () => {
  const navigate = useNavigate()
  const removeToken = useSetRecoilState(authToken)
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('user')
      localStorage.removeItem('expiresAt')
      localStorage.removeItem('isLoggedIn')
      removeToken('')
      removeRefreshToken()
      toast({ title: '로그아웃 성공' })
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
