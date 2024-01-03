import { routes } from '@/router'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRoutes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err, query) => {
      if (query.state.status !== undefined) {
        console.log(err)
      }
    }
  })
})

function App() {
  const content = useRoutes(routes)
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{content}</RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
