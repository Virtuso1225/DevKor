import { useEffect } from 'react'
import Nprogress from 'nprogress'

const FalllBack = () => {
  useEffect(() => {
    Nprogress.start()
    return () => {
      Nprogress.done()
    }
  }, [])
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
      {/* <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-[20px] w-[20px] border-b-2 border-gray-900"></div>
        <div className="text-gray-900 text-xl font-bold font-['Inter'] leading-loose mt-[20px]">Loading...</div>
      </div> */}
      <p>loading...</p>
    </div>
  )
}

export default FalllBack
