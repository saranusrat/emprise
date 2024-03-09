import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import CatergoryCard from '../CatergoryCard';
import category01 from '../../assets/category01.png';
import category02 from '../../assets/category02.png';
import category03 from '../../assets/category03.png';
import category04 from '../../assets/category04.png';
import category05 from '../../assets/category05.png';
import PrevIcon02 from '../Icons/PrevIcon02';
import NxtIcon02 from '../Icons/NxtIcon02';

const Catergory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow:<NxtIcon02/>,
    prevArrow:<PrevIcon02/>

  };
  return (
 <Section className=''>
    <Container >
       <div>
       <Heading className="pt-[144px] font-bold text-[40px] text-primaryclr" text="Select Category" as="h2"/>
        <p className=' pt-3 pb-[64px] font-poppins font-normal text-[24px]  text-gray-600'>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
       </div>
       <Slider {...settings}>
       <CatergoryCard categoryImg={category01} 
       headingtxt="Beach Activity"
       badgetxt="3.8"/>
        <CatergoryCard categoryImg={category02} 
       headingtxt="Bungee Jump"
       badgetxt="3.8"/>
       <CatergoryCard categoryImg={category03} 
       headingtxt="City Tours"
       badgetxt="3.8"/>
       <CatergoryCard categoryImg={category04} 
       headingtxt="Hiking trips"
       badgetxt="3.8"/>
      
        <CatergoryCard categoryImg={category05} 
       headingtxt="Jungle"
       badgetxt="3.8"/> 
        
      
  </Slider>
      
    </Container>
  
 </Section>
  )
}

export default Catergory