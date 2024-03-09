import React from 'react'

const Button = ({className,text}) => {
  return (
<button className={`${className}: px-3 py-2  font-poppins font-normal rounded-[28px] text-black hover:text-white hover:bg-thirdclr `}>{text}</button>
  )
}

export default Button