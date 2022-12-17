import Item from './Item'

interface Props {
  items: any
}
const MaterialsChoice = (props: Props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.name}>
          <Item name={item.name} img={item.img} />
        </li>
      ))}
    </ul>
  )
}

export default MaterialsChoice
