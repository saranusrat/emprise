import React from 'react'
import { TfiArrowCircleRight } from "react-icons/tfi";

const NxtIcon04 = (props) => {
    const {  onClick } = props;
    return (
      <div
        className=" absolute bottom-[758px] right-[100px]"
       
        onClick={onClick}
      ><TfiArrowCircleRight className=' size-12 text-gray-400 '/></div>
    );
}

export default NxtIcon04