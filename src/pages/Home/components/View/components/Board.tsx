import React from 'react'

interface Props {
  show: boolean
}

const Board: React.FC<Props> = ({ show }: Props) => {
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
          src={`${window.location.origin}/src/assets/images/mockmoodboard.jpg`}
          alt="Your MoodBoard"
        />
      </div>
    </div>
  )
}
export default Board
