import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import InclusionIcon from '../Icons/InclusionIcon'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Inclisions = () => {
  return (
  <Section>
    <Container>
        <div className='w-[787px] pt-16'>

<Flex className=" justify-between">
<div><InclusionIcon/></div>
<div className='w-[648px] border-b-2'>
<div className='pb-10'>
    <p className=' font-poppins font-normal text-base text-primaryclr'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.</p>
</div>
<div>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>All breakfasts, 4 packed lunches, and 6 dinners</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>All Fees and Taxes</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>All necessary documents and paperwork (TIMS cards and permit)</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Highly experienced Government Registered guide</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>First aid box</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <FaCheck className=' size-7 text-thirdclr'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Farewell dinner</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <IoCloseSharp className=' size-9 text-red-500'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Alcoholic Beverages</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <IoCloseSharp className=' size-9 text-red-500'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Portugal visa fee</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <IoCloseSharp className=' size-9 text-red-500'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Personal expenses (Phone calls, bar bills, battery recharge, laundry)</p>
</Flex>
<Flex className="pb-6 items-center gap-5">
   <IoCloseSharp className=' size-9 text-red-500'/> 
   <p className=' font-poppins font-normal text-base text-primaryclr'>Tipping and donations</p>
</Flex>
</div>
</div>
</Flex>
        </div>
    </Container>
  </Section>
  )
}

export default Inclisions