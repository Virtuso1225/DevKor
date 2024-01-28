import MainLayout from '@/components/custom/MainLayout'
import DummyPage from '@/pages/DummyPage'
import Home from '@/pages/Home'
import LoginPage from '@/pages/LoginPage'
// import Todo from '@/pages/TodoPage'
import TodoRefreshTokenPage from '@/pages/TodoRefreshTokenPage'
import AuthPath from '@/router/AuthPath'
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
      //   path: '',
      //   children: [
      //     {
      //       path: 'todo',
      //       element: <Todo />
      //     }
      //   ]
      // }
      {
        path: '',
        element: <AuthPath />,
        children: [
          {
            path: 'todo',
            element: <TodoRefreshTokenPage />
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
