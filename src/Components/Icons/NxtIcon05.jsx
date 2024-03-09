import React from 'react'
import { TfiArrowCircleRight } from "react-icons/tfi";

const NxtIcon05 = (props) => {
    const {  onClick } = props;
  return (
    <div
    className=" absolute top-[45%] right-[200px]"
   
    onClick={onClick}
  ><TfiArrowCircleRight className=' size-12 text-white '/></div>
  )
}

export default NxtIcon05