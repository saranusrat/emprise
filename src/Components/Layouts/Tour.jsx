import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TourCard from '../TourCard';
import tour01 from '../../assets/tour01.png';
import tour02 from '../../assets/tour02.png';
import tour03 from '../../assets/tour03.png';


import PrevIcon03 from '../Icons/PrevIcon03';
import NxtIcon03 from '../Icons/NxtIcon03';

const Tour = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow:<NxtIcon03/>,
        prevArrow:<PrevIcon03/>
      };
  return (
   <Section>
    <Container>
    <div>
       <Heading className="pt-[144px] font-bold text-[40px] text-primaryclr" text="Trending 2021" as="h2"/>
        <p className=' pt-3 pb-[64px] font-poppins font-normal text-[24px]  text-gray-600'>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
       </div>
       <Slider {...settings}>
       <TourCard tourImg={tour01}
       tourHd="Mountain Hiking Tour"/>
      
       <TourCard tourImg={tour02}
       tourHd="Train Tour Skyline"/>
      
       <TourCard tourImg={tour03}
       tourHd="Forest Wild Life"/>
      
       <TourCard tourImg={tour01}
       tourHd="Mountain Hiking Tour"/>
      
       <TourCard tourImg={tour02}
       tourHd="Mountain Hiking Tour"/>
      
      </Slider>
      
    </Container>
   </Section>
  )
}

export default Tour