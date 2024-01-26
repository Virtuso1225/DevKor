import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div className="flex flex-col p-1">
      <Helmet>
        <title>Devkor React Advanced</title>
      </Helmet>
      <span className="text-gray-900 text-5xl text-center sm:text-left font-extrabold font-['Inter'] leading-[48px] mt-[40px]">
        🎊 DevKor React Advanced !! 🎊
      </span>
    </div>
  )
}

export default Home
