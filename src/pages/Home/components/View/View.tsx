import React, { useState } from 'react'
import Board from './components/Board'
import Visualisation from './components/Visualisation'
import Rollup from './components/Rollup'
import Switch from '../../../../components/Switch'

const View: React.FC = () => {
  const [showVisualisationView, setShowVisualisationView] = useState<boolean>(true)

  const toggleVisualisationView = () => {
    setShowVisualisationView(!showVisualisationView)
  }

  return (
    <div className="flex-1 flex-col justify-end h-screen">
      <div className="flex flex-1 flex-col justify-end h-full relative">
        <div className="visuals flex flex-1 justify-center align-middle relative h-full ">
          <Board show={!showVisualisationView} />
          <Visualisation show={showVisualisationView} />
        </div>
        <div className="absolute bottom-0 w-full">
          <Rollup />
        </div>
      </div>
      <div className="switchContainer absolute top-10 right-20 w-20 h-10">
        <Switch onToggle={toggleVisualisationView} />
      </div>
    </div>
  )
}

export default View
