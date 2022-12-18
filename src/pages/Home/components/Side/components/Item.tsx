import gwiazdolit from '../../../../../assets/images/czekolada.jpg'
import marmur from '../../../../../assets/images/marmur.jpg'
import zielonium from '../../../../../assets/images/zielonium.png'
import zoltolit from '../../../../../assets/images/zoltolit.png'

interface Props {
  name: string
  img: number
  counter: () => void
}

const Item = (props: Props) => {
  const { name, img, counter } = props

  document.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  const fakeImages = [marmur, gwiazdolit, zoltolit, zielonium]

  return (
    <div className="rounded-lg flex items-center justify-between text-xs pl-0 my-1 px-3 gap-10 w-80 h-6 box-border focus:bg-panel">
      <span>{name}</span>
      <div className="w-36 h-6 overflow-hidden rounded-[20px] ">
        <img
          draggable
          onDragEnd={() => {
            counter()
          }}
          className="hover:cursor-pointer"
          src={fakeImages[img]}
          alt={name}
        />
      </div>
    </div>
  )
}

export default Item
