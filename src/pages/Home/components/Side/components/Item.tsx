import asset from '../../../../../data/texture.jpg'

interface Props {
  name: string
}

const Item = (props: Props) => {
  const { name } = props
  return (
    <div className="flex items-center my-1 px-3 gap-10 w-80 h-14 box-border border border-red-500">
      <span>{name}</span>
      <div className="w-52 h-12 overflow-hidden">
        <img src={asset} alt={name} />
      </div>
    </div>
  )
}

export default Item
