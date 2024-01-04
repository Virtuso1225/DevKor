import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES } from '@/data/messages'
import { routes } from '@/router'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRoutes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: err => {
      if (err instanceof AxiosError) {
        toast({ variant: 'destructive', title: err.message })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
})

function App() {
  const content = useRoutes(routes)
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{content}</RecoilRoot>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
