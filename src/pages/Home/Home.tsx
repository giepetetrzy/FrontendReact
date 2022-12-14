import { FaReact } from 'react-icons/fa'

const Home = () => 
    <div className="flex flex-col justify-center h-screen align-middle">
      <div className="flex flex-row justify-center text-[10rem] motion-safe:animate-spin-slow text-blue-600">
        <FaReact />
      </div>
      <h1 className="text-primary text-center">Example App</h1>
    </div>

export default Home
