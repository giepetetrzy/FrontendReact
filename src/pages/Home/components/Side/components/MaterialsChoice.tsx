import Item from './Item'

interface Props {
  items: Array<string>
}
const MaterialsChoice = (props: Props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Item name={item} />
        </li>
      ))}
    </ul>
  )
}

export default MaterialsChoice
