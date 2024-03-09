import React from 'react'
import Flex from './Flex'
import Image from './Image'

import Heading from './Heading'
import { Link } from 'react-router-dom'

const GuideCard = ({guideImg}) => {
  return (
    <div>
      <Flex className="gap-8">
        <div>
            <Image src={guideImg}/>
        </div>
        <div>
<div className='pt-[38px] pb-[95px]'>
   <p className=' font-poppins font-normal text-[24px] text-thirdclr'>Adventure Guru</p>
   <Heading className=" w-[270px] font-medium text-[40px] text-primaryclr" text="Martina
James Junior" as="h4"/> 
</div>
<Flex className="gap-8 pb-[171px]">
    <div>
    <Heading className=" text-[24px] text-primaryclr" text="About" as="h4"/>  
    <p className='w-[343px] font-poppins text-[16px] text-secondaryclr'>Check Out Daily Deals and Promotion on
hotels. Easy & Fast Booking.</p>
    </div>
    <div>
    <Heading className=" text-[24px] text-primaryclr" text="Journy" as="h4"/>  
    <p className='w-[343px] font-poppins text-[16px] text-secondaryclr'>Check Out Daily Deals and Promotion on
hotels. Easy & Fast Booking.</p>
    </div>
</Flex>
<div>
    <Link className=' font-poppins font-normal text-[18px] text-primaryclr'>Facebook</Link>
    <Link className=' font-poppins font-normal text-[18px] text-primaryclr ml-8'>Instagram</Link>
    <Link className=' font-poppins font-normal text-[18px] text-primaryclr ml-8'>Twitter</Link>
</div>
        </div>
      </Flex>
    </div>
  )
}

export default GuideCard