import Header from '@/components/custom/Header'
import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Header />,
    children: [
      {
        path: '',
        element: <div>Home</div>
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'contact',
        element: <div>Contact</div>
      }
    ]
  }
]

export default routes
