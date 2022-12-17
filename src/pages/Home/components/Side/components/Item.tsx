import asset2 from '../../../../../assets/images/czekolada.jpg'
import asset from '../../../../../assets/images/drewno.jpg'
import asset3 from '../../../../../assets/images/marmur.jpg'
import asset4 from '../../../../../assets/images/sosna.jpg'

interface Props {
  name: string
}

const Item = (props: Props) => {
  const { name } = props
  const assets = [asset, asset2, asset3, asset4]
  return (
    <div className="flex items-center justify-between text-xs pl-0 my-1 px-3 gap-10 w-80 h-6 box-border">
      <span>{name}</span>
      <div className="w-36 h-6 overflow-hidden rounded-[20px] ">
        <img src={assets[Math.floor(Math.random() * assets.length)]} alt={name} />
      </div>
    </div>
  )
}

export default Item
