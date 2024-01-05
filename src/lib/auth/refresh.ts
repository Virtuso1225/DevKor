import { getRefreshToken } from '@/lib/auth/cookies'
import { expiresAt } from '@/recoil/atom'
import { type AxiosRequestConfig } from 'axios'
import { useRecoilValue } from 'recoil'

export const useRefresh = async (config: AxiosRequestConfig) => {
  const refreshToken = getRefreshToken()
  const expireDate = useRecoilValue(expiresAt)
  const today = new Date()
  if (refreshToken && expireDate < today) {
  }
  return config
}
