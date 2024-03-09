import React from 'react'
import Image from './Image'
import Heading from './Heading'
import Badge01 from './Badge01'

const CatergoryCard = ({categoryImg,badgetxt,headingtxt}) => {
  return (
   <>
    <div className=' relative pt-[135px] pb-9 pl-9 pr-[176px] w-[376px] rounded-lg border  border-secondaryclr shadow-lg'>
        <Image src={categoryImg}/>
        <Heading className=" w-[167px] py-3 font-poppins font-medium text-[20px] text-primaryclr" text={headingtxt} as="h5"/>
        <p className=' font-poppins font-normal text-[16px] text-secondaryclr'>196 Activities</p>
        <div className=' absolute top-3 right-4'>
    <Badge01  text={badgetxt}/>
    </div>
    </div>

   </>
  )
}

export default CatergoryCard