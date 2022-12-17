import Actions from './components/Actions'
import Menu from './components/Menu'

const Side = () => (
  <div className="flex flex-col h-screen justify-between w-96 border-r">
    <Menu />
    <Actions />
  </div>
)

export default Side
