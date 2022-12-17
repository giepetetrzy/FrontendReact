import React, { useState } from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'

const Rollup = () => {
  const [expand, setExpand] = useState<boolean>(false)
  let className = 'bg-pink-200  w-full transition-all ease-in-out'
  if (expand) {
    className += ' h-[20rem] max-h-[90vh]'
  } else {
    className += ' h-10'
  }
  return (
    <div className={className}>
      <div className="relative flex flex-col justify-start">
        <div
          role="presentation"
          className="bg-pink-200 rounded-full p-2 absolute top-0 left-1/2 transform -translate-y-1/2 hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <div className={expand ? 'hidden' : ''}>
            <FaArrowCircleUp />
          </div>
          <div>
            <FaArrowCircleDown className={expand ? '' : 'hidden'} />
          </div>
        </div>
        Rollup
      </div>
    </div>
  )
}

export default Rollup
