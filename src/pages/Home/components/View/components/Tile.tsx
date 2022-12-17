import React from 'react'

interface Props {
  image: string
}

const MoodboardInsp: React.FC<Props> = ({ image }: Props) => (
  <div className="flex-none transition-transform hover:-translate-y-2   w-[calc(33.333%-1.25rem)]  mr-5 aspect-square rounded-xl first-letter:">
    <button type="button" className=" aspect-square">
      <img className="object-contain aspect-square rounded-2xl" src={image} alt="" />
    </button>
  </div>
)

export default MoodboardInsp
