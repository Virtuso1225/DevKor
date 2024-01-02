import { routes } from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRoutes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
const queryClient = new QueryClient()
function App() {
  const content = useRoutes(routes)
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{content}</RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
