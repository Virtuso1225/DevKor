import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex flex-row w-full h-[71px] items-center justify-between border-b border-slate-300 px-[200px]">
      <div className="flex flex-row items-center gap-[20px]">
        <Link to="/">
          <div className="text-slate-900 text-xl font-bold font-['Inter'] leading-loose">DevKor</div>
        </Link>
        <Link to="/basic">
          <div className="hover:text-gray-800 text-gray-600 text-md font-medium font-['Inter'] leading-normal">
            Basic
          </div>
        </Link>
        <Link to="/advanced">
          <div className="hover:text-gray-800 text-gray-900 text-md font-medium font-['Inter'] leading-normal">
            Advanced
          </div>
        </Link>
        <Link to="/projects">
          <div className="hover:text-gray-800 text-gray-600 text-md font-medium font-['Inter'] leading-normal">
            Projects
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-[10px]">
        <Link to="/contributor">
          <div className="hover:text-gray-800 text-gray-600 text-md font-medium font-['Inter'] leading-normal">
            Contributor
          </div>
        </Link>
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
