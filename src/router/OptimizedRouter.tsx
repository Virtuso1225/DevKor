import LazyLoader from '@/components/custom/LazyLoader'
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const MainLayout = LazyLoader(lazy(() => import('@/components/custom/MainLayout')))
const Home = LazyLoader(lazy(() => import('@/pages/Home')))
const Todo = LazyLoader(lazy(() => import('@/pages/TodoPage')))
const TodoQueryPage = LazyLoader(lazy(() => import('@/pages/TodoQueryPage')))
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
