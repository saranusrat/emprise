import React from 'react'
import PrevArrow from './PrevArrow';

const PrevIcon01 = (props) => {
    const { className,onClick } = props;
  return (
    <div
    className=" absolute  top-[610px] left-[295px]  z-10 "
    onClick={onClick}
  ><PrevArrow/></div>
  )
}

export default PrevIcon01