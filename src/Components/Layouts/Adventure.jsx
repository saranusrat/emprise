import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import dot from '../../assets/dotsBg.png'
import adv01 from '../../assets/adv01.png'
import adv02 from '../../assets/adv02.png'
import adv03 from '../../assets/adv03.png'
import partner from '../../assets/Partners.png'
import Heading from '../Heading'
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

const Adventure = () => {
  return (
   <Section className="pt-[132px] ">
    <Container>
<Flex className="gap-10">
    <div>
<div className=' relative'>
<Flex className="gap-8">
    <div className='w-[376px]'>
    <Image src={adv01} className='w-full'/>
    </div>
    <div>
        <div className='w-[376px] pb-8'>   <Image src={adv02} className='w-full'/></div>
        <div className='w-[376px]'>   <Image src={adv03} className="w-full"/></div>
    </div>
</Flex>
<div className=' absolute -top-6 -left-12 -z-20'>
<Image src={dot}/>
</div>
   
</div>
    </div>
    <div className='mt-6'>
<div>
    <p className=' font-poppins font-normal text-[24px] text-thirdclr'>Subscribe For Offers</p>
    <Heading className="w-[466px] py-4 font-semibold text-[48px] text-primaryclr" text="Adventures Calling 
You Guys!" as="h2"/>
    <p className='w-[460px] font-poppins font-normal text-[24px] text-secondaryclr'>The Brilliant reasons Entrada should be
your one-stop-shop!</p>
</div>
<div className='mt-20 shadow-2xl'>
<Flex>
<div className='py-8 w-[460px]'>
<Flex className=" ml-5 items-center gap-3">
<MdOutlineEmail className=' size-5 text-secondaryclr outline-none'/>
    <input type='email' placeholder='Enter your email' className=' focus:outline-none'/>
</Flex>
</div>
<div className=' p-8  bg-thirdclr'>
  <Link>  <button className=' font-poppins  font-normal text-[24px]  text-white'>
    Send Now!
    </button></Link>
</div>
</Flex>
</div>
<div>
    <p className=' font-poppins font-normal text-[16px] text-secondaryclr pt-12'>
    Expect a reply in 2-3 working days
    </p>
</div>

    </div>
</Flex>
<div className='py-[170px]'>
    <Image src={partner}/>
</div>
    </Container>
   </Section>
  )
}

export default Adventure