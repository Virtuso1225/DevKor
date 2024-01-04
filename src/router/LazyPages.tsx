import LazyLoader from '@/components/custom/LazyLoader'
import { lazy } from 'react'

export const MainLayout = LazyLoader(lazy(() => import('@/components/custom/MainLayout')))
export const Home = LazyLoader(lazy(() => import('@/pages/Home')))
export const Todo = LazyLoader(lazy(() => import('@/pages/TodoPage')))
export const TodoQueryPage = LazyLoader(lazy(() => import('@/pages/TodoQueryPage')))
