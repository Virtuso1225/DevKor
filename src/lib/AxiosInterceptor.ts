import API from '@/lib/auth/customApi'
import { onRequest } from '@/lib/auth/onRequest'
import { handleLoginStore } from '@/store/atom'
import { useAtomValue } from 'jotai/react'
import { useEffect } from 'react'

export const AxiosInterceptor = () => {
  //   const loginsStatus = useAtomValue(handleLoginState)
  const loginsStatus = useAtomValue(handleLoginStore)
  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use(config => {
      return onRequest(config, loginsStatus)
    })
    return () => {
      API.interceptors.request.eject(requestInterceptor)
    }
  }, [loginsStatus])
}
