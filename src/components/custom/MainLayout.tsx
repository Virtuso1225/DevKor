import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Header from '@/components/custom/Header'

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <title>DevKor</title>
      </Helmet>
      <Header />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
