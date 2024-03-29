import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { AxiosError } from 'axios'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster.tsx'
import { COMMON_MESSAGES } from '@/data/messages.ts'
import { toast } from '@/components/ui/use-toast.ts'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <HelmetProvider>
    {/* <React.StrictMode> */}
    <CookiesProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster />
        </QueryClientProvider>
      </BrowserRouter>
    </CookiesProvider>
    {/* </React.StrictMode> */}
  </HelmetProvider>
  // </StrictMode>
)
