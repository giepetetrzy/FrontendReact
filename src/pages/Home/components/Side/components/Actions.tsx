import Button from '../../../../../components/Button'

const Actions = () => (
  <div className="flex gap-[10px]">
    <Button isTransparent text="Wstecz" />
    <Button isTransparent={false} text="Kontynuuj" />
  </div>
)

export default Actions
