import React from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

interface Props {
  onClick: () => void
  flipped: boolean
  horizontal: boolean
}

const Arrow: React.FC<Props> = ({ onClick, flipped, horizontal }: Props) => (
  <div>
    <div
      role="presentation"
      className="bg-accent rounded-xl p-2 text-secondary text-xl  hover:cursor-pointer "
      onClick={() => {
        onClick()
      }}
    >
      <div
        className={`transition-all ease-in-out delay-100 duration-300 ${
          flipped ? '-scale-100' : 'scale-100'
        } ${horizontal ? 'rotate-90' : ''}`}
      >
        <HiOutlineChevronUp />
      </div>
    </div>
  </div>
)

export default Arrow
