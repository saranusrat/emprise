import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import SellerCard from '../SellerCard'
import seller01 from '../../assets/seller01.png'
import seller02 from '../../assets/seller02.png'
import seller03 from '../../assets/seller03.png'


const Seller = ({Hdtxt}) => {
  return (
 <Section  className="pt-[142px]">
    <Container>
  <div className='pb-16'>
  <Flex className=" justify-between">
     <div>
        <Heading className=" font-bold text-[40px] text-primaryclr" text={Hdtxt}as="h2"/>
        <p className=' pt-6  font-poppins font-normal text-[24px]  text-gray-600'>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div>
        <button className='px-3 py-2  font-poppins  font-normal text-[24px] rounded-[28px] border  text-black hover:text-white hover:bg-thirdclr'>Check All</button>
        </div>
     </Flex>
  </div>
  <div>
   <Flex className="gap-8">
      <SellerCard sellerImg={seller01} txtHD="Train Tour Skyline"/>
      <SellerCard sellerImg={seller02} txtHD="Sea Nature Views"/>
      <SellerCard sellerImg={seller03} txtHD="Trilogy Market Ptr"/>
   </Flex>
  </div>
    </Container>
 </Section>
  )
}

export default Seller