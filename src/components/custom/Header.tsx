import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  const location = useLocation()
  const isTodo = location.pathname === '/todo'
  return (
    <div className="flex flex-row w-full h-[60px] items-center justify-between border-b border-slate-300 px-[200px]">
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
      <Button variant="ghost">
        <Link to="https://github.com/DevKor-github">
          <GitHubLogoIcon className="size-[20px]" />
        </Link>
      </Button>
    </div>
  )
}

export default Header
