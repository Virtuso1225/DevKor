import { handleLoginStore } from '@/store/atom'
import { useAtomValue } from 'jotai/react'
import { loadable } from 'jotai/utils'
import { Navigate, Outlet } from 'react-router-dom'

const AuthPath = () => {
  // const isAuth = useRecoilValue(isAuthenticated)
  const isLoggedIn = useAtomValue(loadable(handleLoginStore))
  const test = localStorage.getItem('accessToken') !== null ? true : false
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default AuthPath
