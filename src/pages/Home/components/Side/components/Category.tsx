import React from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

interface Props {
  name: string
  clickAction: React.MouseEventHandler
  opened: boolean
}

const Category = (props: Props) => {
  const { name, clickAction, opened } = props

  return (
    <button type="button" onClick={clickAction} className="flex flex-1 pr-2">
      <div className="flex flex-1 items-center justify-between">
        <div className="font-medium text-base">{name}</div>
        <div
          className={`${
            opened ? 'scale-100' : '-scale-100'
          } text-accent text-2xl transition-transform`}
        >
          <HiOutlineChevronUp />
        </div>
      </div>
    </button>
  )
}

export default Category
