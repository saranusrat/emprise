import React from 'react'
import Image from './Image'
import Badge02 from './Badge02'
import Flex from './Flex'
import Heading from './Heading'
import { TfiHeart } from "react-icons/tfi";
import { FaStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";


const TourCard = ({tourImg,tourHd}) => {
  return (
 <>

 <div className=' pt-4  pb-9 w-[512px] rounded-lg  shadow-lg'>
    <div className=' relative w-[480px] ml-4'>
        <Image src={tourImg} className='w-full text-center'/>
        <div className=' absolute bottom-[205px] left-[400px]'>
            <Badge02/>
        </div>
    </div>
    <div className='mx-9'>
<Flex className=" justify-between  items-center pt-9 pb-8">
    <div>
        <Heading className=" font-semibold text-[24px] text-primaryclr pb-3" text={tourHd} as="h2"/>
        <Heading className=" text-[16px]  text-secondaryclr" text="Hiking Tour | Stoke on Trent" as="h3"/>
    </div>
  <button><TfiHeart className='size-9'/></button>
</Flex>
<Flex className=" justify-between">
    <div>
        <p className=' font-poppins text-[14px] text-secondaryclr'>from</p>
        <Heading className=" font-poppins font-bold text-[32px] text-black underline decoration-amber-500/90  py-2" text="$895.00" as="h2"/>
        <p className=' font-poppins text-[14px] text-secondaryclr'>*Price varies</p>
    </div>
    <div>
        <Flex className="mt-3 pb-4">
<FaStar className='text-yellow-500'/>
<FaStar className='text-yellow-500'/>
<FaStar className='text-yellow-500'/>
<FaStar className='text-yellow-500'/>
<FaStar className='text-yellow-500'/>

        </Flex>
        <p className=' font-poppins text-[16px] text-secondaryclr'>4.7 (108)</p>

    </div>
</Flex>
<div>
    <Flex className='items-center gap-2 pt-12 pb-3'>
<CiClock2 className=' text-thirdclr size-5'/>
<p className=' font-poppins text-[16px] font-medium text-secondaryclr'>7 Days</p>
    </Flex>
    <Flex className="gap-5 ">
        <Flex className='gap-2'>
<button><FaAngleDown className=' text-thirdclr size-5'/></button>
<p className=' font-poppins text-[16px] text-secondaryclr'>Free Cancellation</p>
        </Flex>
        <Flex className="gap-2">
<button><FaAngleDown className=' text-thirdclr size-5'/></button>
<p className=' font-poppins text-[16px] text-secondaryclr'>New on Entrada</p>
        </Flex>
    </Flex>
</div>
    </div>

 </div>

 </>
  )
}

export default TourCard