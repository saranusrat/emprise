import React from 'react'
import Section from '../Section'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from '../Image';
import banner01 from '../../assets/banner01.png';
import banner02 from '../../assets/banner02.png';
import banner03 from '../../assets/banner03.png';
import banner04 from '../../assets/banner04.png';
import banner05 from '../../assets/banner05.png';
import { Link } from 'react-router-dom';
import PrevIcon01 from '../Icons/PrevIcon01';
import NxtIcon01 from '../Icons/NxtIcon01';
// ///////location/////////////
import axios from "axios";
import { useEffect, useState } from "react";
import Flex from '../Flex';
import Heading from '../Heading';
import { IoLocationOutline,IoSearch } from "react-icons/io5";
import { BiCaretDownCircle } from "react-icons/bi";
// ////////Location////////////////



const Banner = () => {
  const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:<NxtIcon01/>,
          prevArrow: <PrevIcon01/>,
     
        };
        let [all,setAll] = useState([])
        useEffect(()=>{
         async function all(){
           let data = await axios.get("https://restcountries.com/v3.1/all");
           setAll(data.data); 
         }
         all()
        },[])
       
  return (
 <Section className='relative'>

      <Slider {...settings}>
      <div className=' mt-[160px] ml-[160px]' >
       <Link> <Image src={banner01} /></Link>
      </div>
      <div className=' mt-[160px] ml-[160px]' >
       <Link> <Image src={banner02}/></Link>
      </div>
        <div className=''>
        <Link> <Image src={banner03}/></Link>
        </div>
        <div className='' >
       <Link> <Image src={banner04}/></Link>
      </div>
      <div className='' >
       <Link> <Image src={banner05}/></Link>
      </div>
      </Slider>
      <div className="  absolute bottom-[200px] left-[300px] w-[1250px] rounded-[16px] bg-white shadow-lg">
      <Flex>
        <div className='my-[37px] ml-[70px] border-r-2  border-secondaryclr pr-[70px]'>
          <Heading className=" font-poppins font-semibold text-[28px] text-black underline decoration-amber-500/90  pb-3" text="Location" as="h3"/>
          <Flex className=" gap-6 items-center">
          <select >
     {all.map(item=>
     <option> {item.region} </option>
     )}
     </select>
           
          <IoLocationOutline />
      
          </Flex>
        </div>
        <div className='my-[37px] ml-[70px] border-r-2  border-secondaryclr pr-[70px]'>
          <Heading className=" font-poppins font-semibold text-[28px] text-black underline decoration-amber-500/90   pb-3" text="Activity" as="h3"/>
          <Flex className=" gap-6 items-center">
          <input type="text"  className='placeholder:font-poppins placeholder:font-normal placeholder:text-[18px] placeholder:text-secondaryclr focus:outline-none ' placeholder='Bungee jump' />
          <BiCaretDownCircle />
      
          </Flex>
        </div>
        <div className='my-[37px] ml-[70px]'>
          <Heading className=" font-poppins font-semibold text-[28px] text-black underline decoration-amber-500/90  pb-3" text="Date" as="h3"/>
          <Flex className=" gap-6 items-center">
            <input type='date' className=' font-poppins font-normal text-[18px] text-secondaryclr underline'/>
         
      
          </Flex>
        </div>
        <div className=' relative  my-[30px] ml-[201px] w-[112px] h-[112px] bg-teal-600 rounded-md '>
      <button> <IoSearch className=' absolute top-[30%] left-[30%] size-10 text-white '/></button>
       </div>
      </Flex>
    </div>
  

 </Section>
  )
}

export default Banner