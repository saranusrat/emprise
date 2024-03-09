import React from 'react'
import { TfiArrowCircleLeft } from "react-icons/tfi";
const PrevIcon05 = (props) => {
    const {  onClick } = props;
  return (
    <div
    className=" absolute z-10   top-[45%]  left-3"
   
    onClick={onClick}
  ><TfiArrowCircleLeft className=' size-12  text-white'/></div>
  )
}

export default PrevIcon05