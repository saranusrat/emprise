import React from 'react'
;
import Slider from "react-slick";
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import GuideCard from '../GuideCard';
import guide01 from '../../assets/guide01.png';
import guide02 from '../../assets/guide02.png';
import NxtIcon04 from '../Icons/NxtIcon04';
import PrevIcon04 from '../Icons/PrevIcon04';
import Image from '../Image';
import CTA from '../../assets/CTA.png';
import { Link } from 'react-router-dom';

const Guides = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        nextArrow:<NxtIcon04/>,
        prevArrow:<PrevIcon04/>
    
      };
  return (
<Section className="pt-[146px]">
    <Container>
    <div>
        <Heading className=" font-bold text-[40px] text-primaryclr" text="Tour Guides" as="h2"/>
        <p className=' pt-6 pb-12 font-poppins font-normal text-[24px]  text-gray-600'>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <Slider {...settings}>
    
 <div> <GuideCard guideImg={guide01}/></div>
 <div> <GuideCard guideImg={guide02}/></div>
 <div> <GuideCard guideImg={guide01}/></div>
      </Slider>
      <div>
       <Link> <Image src={CTA}/></Link>
      </div>
    </Container>
</Section>
  )
}

export default Guides