import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import des01 from '../../assets/des01.png'
import des02 from '../../assets/des02.png'
import des03 from '../../assets/des03.png'
import des04 from '../../assets/des04.png'
import des05 from '../../assets/des05.png'
import des06 from '../../assets/des06.png'

const Destination = () => {
  return (
    <Section>
        <Container>
            
       <Heading className=" pt-[134px] pb-[116px] font-bold text-[40px] text-primaryclr" text="Top Destinations" as="h2"/>
      <Flex className='gap-8'>
        <div>
          <div className='pb-8'><Image src={des01}/></div>
          <div><Image src={des02}/></div>
        </div>
        <div><Image src={des03}/>
        </div>
        <div>
        <div className='pb-8'><Image src={des04}/></div>
        <div><Flex className='gap-8'>
        <div><Image src={des05}/></div>
        <div><Image src={des06}/></div>
          </Flex></div>
        </div>
      </Flex>
        </Container>
    </Section>
  )
}

export default Destination