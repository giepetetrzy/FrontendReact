interface Props {
  isTransparent: boolean
  text: string
}
const Button = (props: Props) => {
  const { text, isTransparent } = props

  let bgColor = 'bg-accent text-secondary'
  if (isTransparent) {
    bgColor = 'bg-panel text-accent'
  }

  return (
    <a
      className={`flex font-medium justify-center items-center border border-accent rounded-2xl accent px-5 py-[14px] text-sm w-44 h-14 ${bgColor}`}
      href="/#"
    >
      {text}
    </a>
  )
}

export default Button
