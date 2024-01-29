import MainLayout from '@/components/custom/MainLayout'
import AuthPath from '@/router/AuthPath'
import { DummyPage, Home, LoginPage, TodoRefreshPage } from '@/router/LazyPages'
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
          {
            path: 'todo',
            element: <TodoRefreshPage />
          }
        ]
      },
      {
        path: 'dummy',
        element: <DummyPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]

export default routes
