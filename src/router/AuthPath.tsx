import { isAuthenticated } from '@/recoil/atom'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const AuthPath = () => {
  const isAuthenicated = useRecoilValue(isAuthenticated)
  return isAuthenicated ? <Outlet /> : <Navigate to="/login" />
}

export default AuthPath
