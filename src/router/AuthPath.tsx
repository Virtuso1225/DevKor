import { isAuthenticated } from '@/recoil/atom'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const AuthPath = () => {
  const isAuth = useRecoilValue(isAuthenticated)
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default AuthPath
