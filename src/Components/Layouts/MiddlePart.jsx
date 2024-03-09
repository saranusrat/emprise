import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import InputChart from '../InputChart'
import TourCard from '../TourCard'
import item01 from '../../assets/item01.png'
import item02 from '../../assets/item02.png'
import item03 from '../../assets/item03.png'
import item04 from '../../assets/item04.png'
import item05 from '../../assets/item05.png'
import item06 from '../../assets/item06.png'
import { Link } from 'react-router-dom'

const MiddlePart = () => {
  return (
   <Section>
    <Container>
        <Flex className="gap-20">
            <div><InputChart/></div>
            <div>
                <Flex className=" flex-wrap gap-9">
          <Link > <TourCard tourImg={item01} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item02} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item03} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item04} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item02} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item05} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item06} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item03} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item01} tourHd="Cultural highlights round trip"/></Link>
          <Link > <TourCard tourImg={item04} tourHd="Cultural highlights round trip"/></Link>
           </Flex>
            </div>
        </Flex>
    </Container>
   </Section>
  )
}

export default MiddlePart