import React, { useContext } from 'react'
import wersja1 from '../../../../../assets/images/mockmoodboard.jpg'
import wersja2 from '../../../../../assets/images/wersja2.png'
import wersja3 from '../../../../../assets/images/wersja3.png'
import wersja4 from '../../../../../assets/images/wersja4.png'
import { ImgContext } from '../../../Home'

interface Props {
  show: boolean
}

const Board: React.FC<Props> = ({ show }: Props) => {
  const fakeBoards = [wersja1, wersja2, wersja3, wersja4]
  const imgNr = useContext(ImgContext)
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
        <img className="object-contain h-full" src={fakeBoards[imgNr]} alt="Your MoodBoard" />
      </div>
    </div>
  )
}
export default Board
