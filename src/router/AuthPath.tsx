import { toast } from '@/components/ui/use-toast'
import { isAuthenticated } from '@/recoil/atom'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const AuthPath = () => {
  const isAuthenicated = useRecoilValue(isAuthenticated)
  const noAuth = () => {
    toast({ variant: 'destructive', title: '로그인이 필요합니다.' })
    return <Navigate to="/login" />
  }
  return isAuthenicated ? <Outlet /> : noAuth()
}

export default AuthPath
