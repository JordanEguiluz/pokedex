import React from 'react'
import { itemStyles } from './style'

const StatText = ({ text }) => {
  const { root } = itemStyles()
  return <p className={root}>{text}</p>
}
export default StatText
