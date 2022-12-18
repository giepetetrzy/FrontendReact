import React, { useState } from 'react'
import Board from './components/Board'
import Visualisation from './components/Visualisation'
import Rollup from './components/Rollup'
import Switch from '../../../../components/Switch'

const View: React.FC = () => {
  const [showVisualisationView, setShowVisualisationView] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleVisualisationView = () => {
    setShowVisualisationView(!showVisualisationView)
  }

  let className =
    'visuals flex flex-1 justify-center align-middle relative h-full transition-[filter] duration-200 delay-75'
  if (isExpanded) {
    className += ' blur-sm'
  } else {
    className += ' '
  }

  return (
    <div className="flex-1 flex-col justify-end h-screen overflow-y-hidden text-primary">
      <div className="flex flex-1 flex-col justify-end h-full relative">
        <div className={className}>
          <div className="switchContainer absolute top-10 right-[8rem] w-20 h-10 z-10">
            <Switch onToggle={toggleVisualisationView} />
          </div>
          <Board show={!showVisualisationView} />
          <Visualisation show={showVisualisationView} />
        </div>
        <div className="absolute bottom-0 w-full">
          <Rollup isVisualisation={showVisualisationView} setExpanded={setIsExpanded} />
        </div>
      </div>
    </div>
  )
}

export default View
