import Actions from './components/Actions'
import Menu from './components/Menu'

const Side = ({ counter }: { counter: () => void }) => (
  <div className="flex flex-col w-[484px] h-screen py-[120px] px-[60px] bg-panel relative">
    <Menu counter={counter} />
    <Actions />
  </div>
)

export default Side
