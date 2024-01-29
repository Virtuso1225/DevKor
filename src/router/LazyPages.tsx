import LazyLoader from '@/components/custom/LazyLoader'
import { lazy } from 'react'
const DummyPagePre = import('@/pages/DummyPage')
// export const MainLayout = LazyLoader(lazy(() => import('@/components/custom/MainLayout')))
export const Home = LazyLoader(lazy(() => import('@/pages/Home')))
export const Todo = LazyLoader(lazy(() => import('@/pages/TodoPage')))
export const TodoQueryPage = LazyLoader(lazy(() => import('@/pages/TodoQueryPage')))
export const LoginPage = LazyLoader(lazy(() => import('@/pages/LoginPage')))
export const TodoRefreshPage = LazyLoader(lazy(() => import('@/pages/TodoRefreshTokenPage')))
export const DummyPage = LazyLoader(lazy(() => DummyPagePre))
