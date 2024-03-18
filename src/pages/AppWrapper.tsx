import { memo } from 'react'
import { useAxiosInterceptor } from '@/lib/useAxiosInterceptor'

const AppWrapper = () => {
  console.log('AppWrapper')
  useAxiosInterceptor()
  return <></>
}

export default AppWrapper
