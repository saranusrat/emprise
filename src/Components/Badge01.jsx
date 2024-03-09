import React from 'react'

const Badge01 = ({text,className}) => {
  return (
    <div className={`${className}: px-3 py-1 w-[56px] bg-badgetxt01clr rounded-[24px] font-poppins font-medium text-[18px] text-badgeBg01clr `}>
    {text}
    </div>
  )
}

export default Badge01