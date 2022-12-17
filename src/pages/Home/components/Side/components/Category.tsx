import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface Props {
  name: string
  clickAction: React.MouseEventHandler
  opened: boolean
}

const Category = (props: Props) => {
  const { name, clickAction, opened } = props

  return (
    <button type="button" onClick={clickAction} className="flex flex-1 mb-1">
      <div className="flex flex-1 items-center justify-between">
        <div>{name}</div>
        <div>{opened ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
    </button>
  )
}

export default Category
