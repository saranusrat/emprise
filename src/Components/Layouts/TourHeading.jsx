import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import { FaStar } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const TourHeading = () => {
  return (
  <Section>
    <Container>
        <div className='  w-[784px] border-b-2 pb-4 '>
<Flex className="justify-between">
    <div className='w-[554px]'>
        <Heading className=" font-bold text-4xl text-primaryclr" text="Sandy beach holiday in Lagos" as="h2"/>
        <Flex className=" mt-8 items-center gap-1">
            <div>
                <Flex className="gap-1">
                <FaStar className=' size-3 text-yellow-500'/>
                <FaStar className=' size-3 text-yellow-500'/>
                <FaStar className=' size-3 text-yellow-500'/>
                <FaStar className=' size-3 text-yellow-500'/>
                <FaStar className=' size-3 text-yellow-500'/>
                </Flex>
            </div>
            <div>
                <p className=' font-poppins font-medium text-base text-secondaryclr'>6,788 Reviews</p>
            </div>
        </Flex>
    </div>
    <div className='w-[120px]'>
      <Flex className="items-center justify-between">
        <IoShareOutline className='size-9 text-secondaryclr'/>
        <FaRegHeart className='size-9 text-secondaryclr'/>
        </Flex>  
    </div>
</Flex>
        </div>
    </Container>
  </Section>
  )
}

export default TourHeading