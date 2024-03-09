import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import support01 from '../../assets/support01.png'
import Support02 from '../../assets/support02.png'
import { Link } from 'react-router-dom'


const Support = () => {
  return (
<Section>
    <Container>
        <div className=' text-center'>
            <Heading className="font-bold text-[40px] text-primaryclr" text="Still have a question?" as="h2"/>
            <p className='pt-5 font-poppins font-normal text-[24px] text-secondaryclr'>The Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div className='pt-[71px] '>
<Flex className='gap-10'>
    <div className=' ml-20 text-center pt-[70px] pb-[58px] px-[132px] bg-thirdclr rounded-xl'>
<Link><Image src={support01} className=" inline-block"/></Link>
<Heading className="pt-[62px] pb-10 font-medium  text-[32px] text-white " text="For Sales" as="h5"/>
<p className='pb-8 w-[366px] font-poppins  text-[24px]  text-teal-100'>The Brilliant reasons Entrada be
your one-stop-shop!</p>
<Link className='block font-poppins font-medium text-[24px] text-white'>sales@entrada.com</Link>
<Link className=' font-poppins font-medium text-[24px] text-white'>+977(985) 456-32-12</Link>
    </div>
    <div className='  text-center pt-[70px] pb-[58px] px-[132px]  bg-primaryclr rounded-xl'>
<Link><Image src={Support02} className=" inline-block"/></Link>
<Heading className="pt-[62px] pb-10 font-medium  text-[32px] text-white " text="For Sales" as="h5"/>
<p className='pb-8 w-[366px] font-poppins  text-[24px]  text-secondaryclr'>The Brilliant reasons Entrada be
your one-stop-shop!</p>
<Link className='block font-poppins font-medium text-[24px] text-white'>sales@entrada.com</Link>
<Link className=' font-poppins font-medium text-[24px] text-white'>+977(985) 456-32-12</Link>
    </div>
</Flex>
        </div>
    </Container>
</Section>
  )
}

export default Support