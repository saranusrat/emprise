import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { BsPlusCircle } from "react-icons/bs";
import Heading from '../Heading'
import Image from '../Image'
import footer from '../../assets/footer.png'
import footer01 from '../../assets/footer01.png'
import { MdOutlineEmail } from "react-icons/md";
import FooterArrow from '../Icons/FooterArrow'
import FooterList from '../FooterList'

const Footer = () => {
  return (
 <Section className="pt-[143px]"> 
  <Container>
    <div className='  border-b-2 pb-11'>
      <Flex>
        <div>
       <Link>
       <Flex className="items-center gap-3">
         <BsPlusCircle className='size-9'/>
         <p className=' font-poppins font-semibold  text-2xl text-primaryclr'>QUICK LINKS</p>
        </Flex></Link>
        </div>
        <div className='ml-[65px]'>
          <p className=' font-poppins font-normal text-2xl text-primaryclr'>Explore more categories</p>
        </div>
        <div className='ml-[510px]'>
        <Link className=" font-poppins font-normal text-2xl text-primaryclr relative after:absolute after:content('') after:bg-primaryclr after:w-[2px] after:h-7 after:top-[5px] after:-right-5">0123-456-324-54 </Link>

          <Link  className='ml-12  font-poppins font-normal text-2xl text-primaryclr'>hello@entrada.com</Link>
        </div>
      </Flex>
    </div>
    <div className=' border-b-2 pb-7 pt-5'> 
    <Flex className=" justify-between">
      <div>
        <p className=' font-poppins font-normal text-2xl text-thirdclr'>Get in touch</p>
        <Heading className="w-[388px] font-medium text-[40px] text-primaryclr" text="Adventures Calling 
You Guys!" as="h3"/>
      </div>
      <div>
        <Flex className="gap-4">
        <div>  <Image src={footer}/></div>
        <div>
          <p className=' font-poppins font-normal text-2xl text-primaryclr'>Our Offices</p>
          <p className='pb-9 pt-3 font-poppins  font-medium text-2xl text-primaryclr'>Nepal, USA, India</p>
          <button><FooterArrow/></button>
        </div>
        </Flex>

      </div>
      </Flex>
      </div>
      <div className='pt-7 pb-[125px]'>
<Flex className="justify-between">
<div>
<Flex className="gap-[150px]">
<div>
  <Heading className=" pb-4 font-medium text-2xl text-primaryclr" text="Services" as="h5"/>
 <ul>
 <FooterList text="Budget Tours" />
  <FooterList text="Expert Insight"/>
  <FooterList text=" Independent"/>
  <FooterList text=" Luxury Tours"/>
  <FooterList text=" Safety Tips"/>
  <FooterList text=" Tips n Tricks"/>
 </ul>
</div>
<div>
  <Heading className=" pb-4 font-medium text-2xl text-primaryclr" text="Adventures" as="h5"/>
 <ul>
 <FooterList text="Beach Activity" />
  <FooterList text="Bungee Jump"/>
  <FooterList text=" City Tour"/>
  <FooterList text=" Hiking Trips"/>
  <FooterList text=" Jungle Safari"/>
  <FooterList text=" Night City Walk"/>
 </ul>
</div>
<div>
  <Heading className=" pb-4 font-medium text-2xl text-primaryclr" text="Country" as="h5"/>
 <ul>
 <FooterList text="USA" />
  <FooterList text="Australia"/>
  <FooterList text=" South Africa"/>
  <FooterList text="West Indies"/>
  <FooterList text=" New Zealand"/>
  <FooterList text="Srilanka"/>
 </ul>
</div>
</Flex>
</div>
<div>
  <p className=' font-poppins font-normal text-2xl text-primaryclr'>Get In Touch</p>
  <Flex className="items-center gap-6">
  <Heading className="  font-medium text-[40px] text-primaryclr" text="Let’s Talk" as="h3"/>
  <FooterArrow/>
  </Flex>
  <div className='mt-10 shadow-2xl'>
<Flex>
<div className='py-7 w-[460px]'>
<Flex className=" ml-5 items-center gap-3">
<MdOutlineEmail className=' size-5 text-secondaryclr outline-none'/>
    <input type='email' placeholder='Enter your email' className=' focus:outline-none'/>
</Flex>
</div>
<div className=' p-7  bg-thirdclr'>
  <Link>  <button className=' font-poppins  font-normal text-[24px]  text-white'>
    Send Now!
    </button></Link>
</div>
</Flex>
</div>
</div>
</Flex>
      </div>
      <div className=' border-b-2 pb-7'>
<Flex className="justify-between">
  <div>
    <p className=' font-poppins font-normal text-2xl text-primaryclr'>Privacy Policy</p>
  </div>
  <div>
  <Flex className=" gap-3">
  <Link className=' font-poppins font-normal text-2xl text-primaryclr'>Linkedin</Link>
    <p className=' font-poppins font-normal text-2xl text-primaryclr'>/</p>
    <Link className=' font-poppins font-normal text-2xl text-primaryclr'>Facebook</Link>
    <p className=' font-poppins font-normal text-2xl text-primaryclr'>/</p>
<Link className=' font-poppins font-normal text-2xl text-primaryclr'>Instagram</Link>
  </Flex>
  </div>
</Flex>
      </div>
      <div className='py-6'>
        <Flex className="justify-between">
    <Link className=' font-poppins font-normal text-base text-primaryclr'>2016-2021 © Emprise</Link>
    <Link><Image src={footer01}/>
    </Link>
        </Flex>
      </div>
  </Container>
</Section>
  )
}

export default Footer
