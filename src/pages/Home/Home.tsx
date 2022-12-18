// import { FaReact } from 'react-icons/fa'
import { createContext, useState } from 'react'
import Side from './components/Side'
import View from './components/View'

export const ImgContext = createContext(0)

const Home = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    if (counter === 3) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
    }
  }

  return (
    <div className="flex flex-row justify-start w-screen">
      <ImgContext.Provider value={counter}>
        <Side counter={increaseCounter} />
        <View />
      </ImgContext.Provider>
    </div>
  )
}
export default Home
