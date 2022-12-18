import React from 'react'

interface Props {
  image: string
}

const MoodboardInsp: React.FC<Props> = ({ image }: Props) => (
  <div className="flex-none transition-transform hover:drop-shadow-md hover:-translate-y-2   w-[calc(33.333%-1.25rem*2/3)]  mr-5 aspect-square rounded-xl first-letter:">
    <button type="button" className=" aspect-square hover:drop-shadow-md">
      <img className="object-cover aspect-square rounded-xl" src={image} alt="" />
    </button>
  </div>
)

export default MoodboardInsp
