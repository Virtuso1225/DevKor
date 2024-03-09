import { useRoutes } from 'react-router-dom'
import { useAxiosInterceptor } from '@/lib/useAxiosInterceptor'
import { routes } from '@/router'


function App() {
  const content = useRoutes(routes)
  useAxiosInterceptor()
  return <>{content}</>
}

export default App
