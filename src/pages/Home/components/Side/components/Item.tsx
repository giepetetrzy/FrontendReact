import gwiazdolit from '../../../../../assets/images/czekolada.jpg'
import marmur from '../../../../../assets/images/marmur.jpg'
import zielonium from '../../../../../assets/images/zielonium.png'
import zoltolit from '../../../../../assets/images/zoltolit.png'

interface Props {
  name: string
  img: number
}

const Item = (props: Props) => {
  const { name, img } = props

  const fakeImages = [
    marmur,
    gwiazdolit,
    zoltolit,
    zielonium,
    marmur,
    gwiazdolit,
    zoltolit,
    zielonium,
  ]

  return (
    <div className="rounded-lg font-normal text-base flex items-center justify-between pl-0 my-2 px-2 gap-2  w-90 h-8 box-border focus:bg-panel">
      <span>{name}</span>
      <div className="w-32 h-8 overflow-hidden rounded-[20px] ">
        <img className="hover:cursor-pointer" src={fakeImages[img]} alt={name} />
      </div>
    </div>
  )
}

export default Item
