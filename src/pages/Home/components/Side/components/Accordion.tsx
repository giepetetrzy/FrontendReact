import { useState } from 'react'
import Category from './Category'
import MaterialsChoice from './MaterialsChoice'

const Accordion = ({ counter }: { counter: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryClick = (index: any) => {
    setActiveCategory(index === activeCategory ? null : index)
  }

  const fakeItems = [
    { name: 'Marmur dolce', img: 0 },
    { name: 'Terrazzo marrone', img: 1 },
    { name: 'Żółtolit meblowy', img: 2 },
    { name: 'Zielonium uniwersalne', img: 3 },
    { name: 'Marmur dolce', img: 4 },
    { name: 'Terrazzo marrone', img: 5 },
    { name: 'Żółtolit meblowy', img: 6 },
    { name: 'Zielonium uniwersalne', img: 7 },
  ]

  const categories = [
    {
      name: 'Panele podłogowe',
      items: fakeItems,
    },
    {
      name: 'Płyty meblowe',
      items: fakeItems,
    },
    {
      name: 'Laminaty HPL',
      items: fakeItems,
    },
    {
      name: 'Walldesign',
      items: fakeItems,
    },
    {
      name: 'Dodatki',
      items: fakeItems,
    },
  ]

  return (
    <div className="max-h-[70%] pb-2 overflow-hidden">
      {categories.map((category, index) => (
        <div
          className="bg-secondary my-auto rounded-2xl py-3 pr-2 px-5 mb-3 flex flex-col flex-1"
          key={category.name}
        >
          <Category
            opened={index === activeCategory}
            name={category.name}
            clickAction={() => handleCategoryClick(index)}
          />
          <div
            className={`transition-all duration-200 overflow-y-hidden ${
              index === activeCategory ? ' max-h-[20rem] ease-in' : ' max-h-[0rem] ease-out'
            } `}
          >
            <MaterialsChoice counter={counter} items={category.items} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
