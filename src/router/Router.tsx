import MainLayout from '@/components/custom/MainLayout'
import Home from '@/pages/Home'
import Todo from '@/pages/TodoPage'
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
            element: <Todo />
          }
        ]
      }
    ]
  }
]

export default routes
