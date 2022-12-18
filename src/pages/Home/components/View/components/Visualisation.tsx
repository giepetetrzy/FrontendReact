import React from 'react'

import board1 from '../../../../../assets/images/1.jpg'
import board2 from '../../../../../assets/images/2.jpg'
import board3 from '../../../../../assets/images/3.jpg'
import board4 from '../../../../../assets/images/4.jpg'

interface Props {
  show: boolean
}

const Visualisation: React.FC<Props> = ({ show }: Props) => {
  const fakeBoards = [board1, board2, board3, board4]
  let className =
    'transition-opacity ease-in-out absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  if (show) {
    className += ' opacity-100 delay-150'
  } else {
    className += ' opacity-0 delay-0'
  }
  return (
    <div className={className}>
      <div className="p-5 pb-20 h-full">
        <img
          className="object-contain h-full"
          src="https://floorplanner.com/static/img/redesign/home/header-image.png"
          alt="Your MoodBoard"
        />
      </div>
    </div>
  )
}

export default Visualisation
