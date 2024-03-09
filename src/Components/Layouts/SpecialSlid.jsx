import React from 'react'
import Section from '../Section'
import Container from '../Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from '../Image';
import slider01 from '../../assets/slider01.png';
import NxtIcon05 from '../Icons/NxtIcon05';
import PrevIcon05 from '../Icons/PrevIcon05';


const SpecialSlid = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NxtIcon05/>,
        prevArrow:<PrevIcon05/>
      };
  return (
   <Section>
    <Container>
  <div className='ml-20'> 
   <Slider {...settings}>
        <div>
       <Image src={slider01}/>
        </div>
        <div>
       <Image src={slider01}/>
        </div>
        <div>
       <Image src={slider01}/>
        </div>
        <div>
       <Image src={slider01}/>
        </div>
     
      </Slider></div>
    </Container>
   </Section>
  )
}

export default SpecialSlid