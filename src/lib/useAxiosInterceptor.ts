import { useAtomValue } from 'jotai/react'
import { useLayoutEffect } from 'react'
import API from '@/lib/auth/custom-api'
import { onRequest } from '@/lib/auth/on-request'
import { loginAtom } from '@/store/atom'

export const useAxiosInterceptor = () => {
  const loginStatus = useAtomValue(loginAtom)
  console.log('outside effect', loginStatus)
  useLayoutEffect(() => {
    console.log('useAxiosInterceptor')
    const requestInterceptor = API.interceptors.request.use(config => {
      return onRequest(config, loginStatus)
    })
    return () => {
      API.interceptors.request.eject(requestInterceptor)
      console.log('useAxiosInterceptor cleanup')
    }
  }, [loginStatus])
}
