import React, { useState } from 'react'
import Arrow from '../../../../../components/Arrow'
import RollupCarousel from './RollupCarousel'
import MockTemplate from '../../../../../assets/images/mocktemplate.png'

interface Props {
  // boards?: string[]
  // templates?: string[]
  // eslint-disable-next-line no-unused-vars
  setExpanded: (e: boolean) => void
  isVisualisation: boolean
}

const Rollup: React.FC<Props> = ({ setExpanded, isVisualisation }: Props) => {
  const [expand, setExpand] = useState<boolean>(false)
  const boardsURLs = [
    'https://i.pinimg.com/originals/b1/1b/36/b11b366b9ba2cd07e3f7c98187acdf48.jpg',
    'https://i.pinimg.com/originals/b1/1b/36/b11b366b9ba2cd07e3f7c98187acdf48.jpg',
    'https://i.pinimg.com/originals/b1/1b/36/b11b366b9ba2cd07e3f7c98187acdf48.jpg',
    'https://i.pinimg.com/originals/b1/1b/36/b11b366b9ba2cd07e3f7c98187acdf48.jpg',
  ]

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
            <RollupCarousel tiles={boardsURLs} />
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
