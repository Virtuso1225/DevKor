import { useAtomValue } from 'jotai/react'
import { useEffect } from 'react'
import API from '@/lib/auth/custom-api'
import { onRequest } from '@/lib/auth/on-request'
import { loginAtom } from '@/store/atom'

export const useAxiosInterceptor = () => {
  const loginStatus = useAtomValue(loginAtom)
  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use(config => {
      return onRequest(config, loginStatus)
    })
    return () => {
      API.interceptors.request.eject(requestInterceptor)
    }
  }, [loginStatus])
}
