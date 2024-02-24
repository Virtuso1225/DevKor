import { AxiosInterceptor } from '@/lib/AxiosInterceptor'
import { routes } from '@/router'

import { useRoutes } from 'react-router-dom'

function App() {
  const content = useRoutes(routes)
  AxiosInterceptor()
  return <>{content}</>
}

export default App
