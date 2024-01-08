import { useSilentRefresh } from '@/api/hooks/refresh'

import { getRefreshToken } from '@/lib/auth/cookies'
import { isAuthenticated } from '@/recoil/atom'
import { routes } from '@/router'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

function App() {
  const isAuth = useRecoilValue(isAuthenticated)
  const { mutate: silentRefreshMutation } = useSilentRefresh()

  const handleRefresh = async () => {
    if (!isAuth && localStorage.getItem('isLoggedIn') === 'true') {
      silentRefreshMutation(getRefreshToken())
    }
  }
  useEffect(() => {
    handleRefresh()
  }, [])
  const content = useRoutes(routes)

  return <>{content}</>
}

export default App
