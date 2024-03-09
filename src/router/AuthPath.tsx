import { useAtomValue } from 'jotai/react'
import { Navigate, Outlet } from 'react-router-dom'
import { loginAtom } from '@/store/atom'

const AuthPath = () => {
  // const isAuth = useRecoilValue(isAuthenticated)
  const isLoggedIn = useAtomValue(loginAtom)
  // const test = localStorage.getItem('accessToken') !== null ? true : false
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default AuthPath
