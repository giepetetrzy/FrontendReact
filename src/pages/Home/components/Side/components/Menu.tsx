import Accordion from './Accordion'

const Menu = ({ counter }: { counter: () => void }) => (
  <div className="flex-1 flex-col h-full">
    <h1 className="font-medium text-4xl leading-[54px] text-accent mb-6 flex flex-col">
      Projekt salonu
    </h1>
    <Accordion counter={counter} />
  </div>
)

export default Menu
