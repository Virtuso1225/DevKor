import type { LoginRequest, LoginResponse } from '@/api/types/auth'
import { toast } from '@/components/ui/use-toast'
import { AUTH_MESSAGES, COMMON_MESSAGES } from '@/data/messages'
import { authToken, expiresAt } from '@/recoil/atom'
import { setRefreshToken } from '@/lib/auth/cookies'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

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

export const useLogin = () => {
  const setToken = useSetRecoilState(authToken)
  const setExpiresAt = useSetRecoilState(expiresAt)
  const navigate = useNavigate()
  return useMutation({
    mutationFn: login,
    onSuccess: data => {
      setToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      setExpiresAt(data.expiresAt)
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
