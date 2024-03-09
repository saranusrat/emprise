import React from 'react'
import { TfiArrowCircleLeft } from "react-icons/tfi";


const PrevIcon04 = (props) => {
    const {  onClick } = props;
    return (
      <div
        className=" absolute z-10   -top-[130px] right-[150px]"
       
        onClick={onClick}
      ><TfiArrowCircleLeft className=' size-12  text-gray-400'/></div>
    );
}

export default PrevIcon04