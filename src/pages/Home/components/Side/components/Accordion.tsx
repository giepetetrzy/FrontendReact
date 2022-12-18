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
    { name: 'Gwiazdolit kosmiczny', img: 1 },
    { name: 'Żółtolit Watykański', img: 2 },
    { name: 'Zielonium 2137', img: 3 },
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
    <div className="h-[500px]">
      {categories.map((category, index) => (
        <div
          className="bg-secondary rounded-2xl py-3 px-5 mb-3 flex flex-col flex-1"
          key={category.name}
        >
          <Category
            opened={index === activeCategory}
            name={category.name}
            clickAction={() => handleCategoryClick(index)}
          />
          {index === activeCategory && <MaterialsChoice counter={counter} items={category.items} />}
        </div>
      ))}
    </div>
  )
}

export default Accordion
