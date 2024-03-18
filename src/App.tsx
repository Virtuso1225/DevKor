import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import AppWrapper from '@/pages/AppWrapper'

function App() {
  const content = useRoutes(routes)
  console.log('App')
  return (
    <>
      <AppWrapper />
      <>{content}</>
    </>
  )
}

export default App
