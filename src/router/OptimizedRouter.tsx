import AuthPath from '@/router/AuthPath'
import { Home, LoginPage, MainLayout, TodoQueryPage, TodoRefreshPage } from '@/router/LazyPages'
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
      // {
      //   path: 'todo',
      //   element: <TodoQueryPage />
      // },
      {
        path: '',
        element: <AuthPath />,
        children: [
          // {
          //   path: 'todo',
          //   element: <TodoQueryPage />
          // },
          {
            path: 'todo',
            element: <TodoRefreshPage />
          }
        ]
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]

export default routes
