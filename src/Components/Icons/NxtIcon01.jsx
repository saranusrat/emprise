import React from 'react'
import NxtArrow from './NxtArrow';

const NxtIcon01 = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className=" absolute top-[610px] left-[345px] z-10"
    onClick={onClick}
  ><NxtArrow/></div>
  )
}

export default NxtIcon01