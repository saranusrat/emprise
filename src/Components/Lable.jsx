import React from 'react'

const Lable = ({className,text}) => {
  return (
   <label className={`font-poppins font-medium text-base text-secondaryclr :${className}`}>{text}</label>
  )
}

export default Lable