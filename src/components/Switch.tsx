import React, { useState } from 'react'

import { FaCube } from 'react-icons/fa'
import { MdOutlineSpaceDashboard } from 'react-icons/md'

interface Props {
  onToggle: () => void
}

const Switch: React.FC<Props> = ({ onToggle }: Props) => {
  const [toggle, setToggle] = useState(true)
  const modifyToggle = (newToggle: boolean) => {
    if (newToggle === toggle) {
      return
    }
    onToggle()
    setToggle(newToggle)
  }
  const toggleClass = ' transform translate-x-6'
  return (
    <div className="flex flex-row justify-start align-middle">
      <div
        role="presentation"
        onClick={() => {
          modifyToggle(true)
        }}
        className={`${
          toggle ? 'drop-shadow scale-125 ' : 'scale-110'
        }"flex flex-justify font-bold-4 px-4 my-auto text-accent hover:cursor-pointer"`}
      >
        <MdOutlineSpaceDashboard />
      </div>
      <div className="flex flex-row justify-center items-center ">
        {/*   Switch Container */}

        <div
          role="presentation"
          className=" w-14 h-7 flex items-center bg-panel rounded-full p-1 cursor-pointer"
          onClick={() => {
            modifyToggle(!toggle)
          }}
        >
          {/* Switch */}
          <div
            className={`bg-accent h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out${
              toggle ? null : toggleClass
            }`}
          />
        </div>
      </div>
      <div
        role="presentation"
        onClick={() => {
          modifyToggle(false)
        }}
        className={`${
          !toggle ? 'drop-shadow scale-110 ' : ''
        }"flex flex-justify font-bold-4 px-4 my-auto text-accent hover:cursor-pointer"`}
      >
        <FaCube />
      </div>
    </div>
  )
}

export default Switch
