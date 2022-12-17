import React from 'react'

interface Props {
  name: string
  clickAction: React.MouseEventHandler
}

const Category = (props: Props) => {
  const { name, clickAction } = props

  return (
    <button type="button" onClick={clickAction}>
      {name}
    </button>
  )
}

export default Category
