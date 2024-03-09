import type { RouteObject } from 'react-router-dom'
import MainLayout from '@/components/custom/MainLayout'
import DummyPage from '@/pages/DummyPage'
import Home from '@/pages/Home'
import LoginPage from '@/pages/LoginPage'
import TodoPage from '@/pages/TodoPage'
// import Todo from '@/pages/TodoPage'
// import TodoRefreshTokenPage from '@/pages/TodoRefreshTokenPage'
// import AuthPath from '@/router/AuthPath'

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
            element: <TodoPage />
          }
        ]
      },
      // {
      //   path: '',
      //   element: <AuthPath />,
      //   children: [
      //     {
      //       path: 'todo',
      //       element: <TodoRefreshTokenPage />
      //     }
      //   ]
      // },
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
