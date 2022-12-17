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
      name: 'Category 1',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    },
    {
      name: 'Category 2',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    },
    {
      name: 'Category 3',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    },
  ]

  return (
    <div>
      {categories.map((category, index) => (
        <div key={category.name}>
          <Category name={category.name} clickAction={() => handleCategoryClick(index)} />
          {index === activeCategory && <MaterialsChoice items={category.items} />}
        </div>
      ))}
    </div>
  )
}

export default Accordion
