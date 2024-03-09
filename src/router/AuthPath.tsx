import { handleLoginStore } from '@/store/atom'
import { useAtomValue } from 'jotai/react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthPath = () => {
  // const isAuth = useRecoilValue(isAuthenticated)
  const isLoggedIn = useAtomValue(handleLoginStore)
  // const test = localStorage.getItem('accessToken') !== null ? true : false
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default AuthPath
