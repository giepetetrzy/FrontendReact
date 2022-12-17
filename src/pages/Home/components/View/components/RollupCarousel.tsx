import React from 'react'
import Arrow from '../../../../../components/Arrow'
import Tile from './Tile'

interface Props {
  tiles?: Array<string>
}

const RollupCarousel: React.FC<Props> = ({ tiles }: Props) => {
  const goRight = () => {}
  const goLeft = () => {}

  const generateBoards = () => {
    if (tiles) {
      return tiles.map((board) => <Tile image={board} />)
    }
    return <div>no boards</div>
  }

  return (
    <div className="w-full  relative">
      <div className="rightArrow absolute right-0 top-1/2 -translate-x-8   -translate-y-1/2">
        <Arrow onClick={goRight} flipped={false} horizontal />
      </div>
      <div className="leftArrow absolute left-0 top-1/2  translate-x-8 -translate-y-1/2">
        <Arrow onClick={goLeft} flipped horizontal />
      </div>
      <div className="mx-auto container px-4  w-full">
        <div
          id="scrollContainer"
          className="flex py-2 flex-no-wrap overflow-x-scroll hide-scroll-bar scrolling-touch items-start mx-20 my-10"
        >
          {generateBoards()}
        </div>
      </div>
    </div>
  )
}

RollupCarousel.defaultProps = {
  tiles: [],
}
export default RollupCarousel
