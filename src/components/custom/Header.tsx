import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isAuthenticated } from '@/recoil/atom'
import { useLogout } from '@/api/hooks/auth'
const Header = () => {
  const location = useLocation()
  const isTodo = location.pathname === '/todo'
  const isDummy = location.pathname === '/dummy'
  const isAuth = useRecoilValue(isAuthenticated)
  const { mutate: logoutMutation } = useLogout()
  return (
    <div className="flex flex-row w-full h-[60px] items-center justify-between border-b border-slate-300 px-[100px]">
      <Link to="/">
        <div className="text-slate-900 text-xl font-bold font-['Inter'] leading-loose">DevKor</div>
      </Link>
      <Link to="/todo">
        <div
          className={`hover:text-gray-800 ${
            isTodo ? `text-gray-900` : `text-gray-600`
          } text-md font-medium font-['Inter'] leading-normal`}
        >
          ToDo
        </div>
      </Link>
      <Link to="/dummy">
        <div
          className={`hover:text-gray-800 ${
            isDummy ? `text-gray-900` : `text-gray-600`
          } text-md font-medium font-['Inter'] leading-normal`}
        >
          Dummy
        </div>
      </Link>
      <div className="flex flex-row items-center justify-center gap-[10px]">
        {isAuth ? (
          <Button onClick={() => logoutMutation()}>로그아웃</Button>
        ) : (
          <Button>
            <Link to="/login">로그인</Link>
          </Button>
        )}
        <Button variant="ghost">
          <Link to="https://github.com/DevKor-github">
            <GitHubLogoIcon className="size-[20px]" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
