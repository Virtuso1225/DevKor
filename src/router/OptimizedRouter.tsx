import { Home, MainLayout, TodoQueryPage } from '@/router/LazyPages'
import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '',
        children: [
          {
            path: 'todo',
            element: <TodoQueryPage />
          }
        ]
      }
    ]
  }
]

export default routes
