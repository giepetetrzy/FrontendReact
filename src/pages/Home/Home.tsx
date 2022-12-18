// import { FaReact } from 'react-icons/fa'
import Side from './components/Side'
import View from './components/View'
import LogoUrl from '../../assets/images/logo.svg'

const Home = () => (
  <div className="flex flex-row justify-start w-screen">
    <div className="logo absolute w-20 aspect-video  left-[60px] top-10 z-20 ">
      <img src={LogoUrl} alt="" srcSet="" />
    </div>
    <Side />
    <View />
  </div>
)

export default Home
