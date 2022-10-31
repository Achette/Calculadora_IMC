import React from 'react'
import { Level } from '../../helpers/imc'

type Props = {
    item: Level
}

const GridItem = ( {item }: Props) => {
  return (
    <div>{item.title}</div>
  )
}

export default GridItem