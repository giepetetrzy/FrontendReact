import { useState } from 'react'
import Category from './Category'
import MaterialsChoice from './MaterialsChoice'

const Accordion = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryClick = (index: any) => {
    setActiveCategory(index === activeCategory ? null : index)
  }

  const categories = [
    {
      name: 'Panele podłogowe',
      items: [
        'Dąb biszkoptowy',
        'Dąb frappe 2',
        'Marmur dolce',
        'Terazzo marrone',
        'Trawertyn tiramisu',
        'Sosna zimowa',
      ],
    },
    {
      name: 'Płyty meblowe',
      items: [
        'Dąb biszkoptowy',
        'Dąb frappe 2',
        'Marmur dolce',
        'Terazzo marrone',
        'Trawertyn tiramisu',
        'Sosna zimowa',
      ],
    },
    {
      name: 'Laminaty HPL',
      items: [
        'Dąb biszkoptowy',
        'Dąb frappe 2',
        'Marmur dolce',
        'Terazzo marrone',
        'Trawertyn tiramisu',
        'Sosna zimowa',
      ],
    },
    {
      name: 'Walldesign',
      items: [
        'Dąb biszkoptowy',
        'Dąb frappe 2',
        'Marmur dolce',
        'Terazzo marrone',
        'Trawertyn tiramisu',
        'Sosna zimowa',
      ],
    },
    {
      name: 'Dodatki',
      items: [
        'Dąb biszkoptowy',
        'Dąb frappe 2',
        'Marmur dolce',
        'Terazzo marrone',
        'Trawertyn tiramisu',
        'Sosna zimowa',
      ],
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
          {index === activeCategory && <MaterialsChoice items={category.items} />}
        </div>
      ))}
    </div>
  )
}

export default Accordion
