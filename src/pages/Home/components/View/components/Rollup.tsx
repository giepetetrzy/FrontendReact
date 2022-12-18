import React, { useState } from 'react'
import MockTemplate from '../../../../../assets/images/mocktemplate.png'
import Arrow from '../../../../../components/Arrow'
import RollupCarousel from './RollupCarousel'

import board1 from '../../../../../assets/images/1.jpg'
import board2 from '../../../../../assets/images/2.jpg'
import board3 from '../../../../../assets/images/3.jpg'
import board4 from '../../../../../assets/images/4.jpg'

interface Props {
  // boards?: string[]
  // templates?: string[]
  // eslint-disable-next-line no-unused-vars
  setExpanded: (e: boolean) => void
  isVisualisation: boolean
}

const Rollup: React.FC<Props> = ({ setExpanded, isVisualisation }: Props) => {
  const [expand, setExpand] = useState<boolean>(false)
  const fakeBoards = [board1, board2, board3, board4]

  const templatesURLs = [MockTemplate, MockTemplate, MockTemplate]
  const toggleExpand = () => {
    setExpand(!expand)
    setExpanded(!expand)
  }
  let className = ' mx-auto w-11/12 h-auto transition-transform ease-in-out'
  if (expand) {
    className += ' translate-y-0'
  } else {
    className += ' translate-y-2/3 lg:translate-y-[80%]'
  }

  return (
    <div className={className}>
      <div className="relative flex flex-col justify-start ">
        <div className="bg-accent z-0 rounded-t-lg pb-5  absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9  ">
          <Arrow onClick={toggleExpand} flipped={expand} horizontal={false} />
        </div>
        <div className="z-10 flex flex-col bg-panel rounded-t-xl ">
          <div
            className={`${
              isVisualisation ? 'hidden ' : ''
            }content flex flex-row flex-nowrap overflow-y-clip`}
          >
            <RollupCarousel tiles={fakeBoards} />
          </div>
          <div
            className={`${
              isVisualisation ? '' : 'hidden '
            }content flex flex-row flex-nowrap overflow-y-clip`}
          >
            <RollupCarousel tiles={templatesURLs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rollup
