import React from 'react'
import Flex from '../Flex'
import ReviewIcon from '../Icons/ReviewIcon'
import Image from '../Image'
import { FaStar } from "react-icons/fa";
import review01 from '../../assets/review01.png'
import review02 from '../../assets/review02.png'
import review03 from '../../assets/review03.png'
import Heading from '../Heading';
import { Link } from 'react-router-dom';

const Review = () => {
  return (
    <div className=' w-[788px] pt-16'>
        <Flex className="justify-between">
<div> <ReviewIcon/></div>
<div>
    
    <div className='w-[648px] rounded-xl border-2'>
<div className='px-3 py-2 border-b-2  bg-reviewbg'>
    <Flex className="items-center justify-between">
        <div>
    <Flex className=" items-center gap-2">
<div><Image src={review01}/></div>
<div><p className=' font-poppins text-[18px] text-secondaryclr  font-medium'>Brooklyn Simmons</p></div>
    </Flex>
        </div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          </Flex></div>
    </Flex>
</div>
<div className=' px-3 pt-11 pb-2 border-b-2'>
<Flex className="justify-between">
    <div> <Heading className=" font-semibold text-[18px] text-primaryclr " text="“Exceptional”" as="h3"/></div>
    <div><p className=' font-poppins text-base text-secondaryclr'>Reviewed 23rd, November</p></div>
</Flex>
</div>
<div className='ml-4 pt-7 pb-12'>
<p className=' font-poppins text-base text-primaryclr w-[600px]'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
</div>



        </div>  
    <div className='w-[648px] rounded-xl border-2 mt-3'>
<div className='px-3 py-2 border-b-2  bg-reviewbg'>
    <Flex className="items-center justify-between">
        <div>
    <Flex className=" items-center gap-2">
<div><Image src={review02}/></div>
<div><p className=' font-poppins text-[18px] text-secondaryclr  font-medium'>Brooklyn Simmons</p></div>
    </Flex>
        </div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-white '/>
          </Flex></div>
    </Flex>
</div>
<div className=' px-3 pt-11 pb-2 border-b-2'>
<Flex className="justify-between">
    <div> <Heading className=" font-semibold text-[18px] text-primaryclr " text="“Terrific”" as="h3"/></div>
    <div><p className=' font-poppins text-base text-secondaryclr'>Reviewed 23rd, November</p></div>
</Flex>
</div>
<div className='ml-4 pt-7 pb-12'>
<p className=' font-poppins text-base text-primaryclr w-[600px]'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
</div>
        </div>  
    <div className='w-[648px] rounded-xl border-2 mt-3'>
<div className='px-3 py-2 border-b-2  bg-reviewbg'>
    <Flex className="items-center justify-between">
        <div>
    <Flex className=" items-center gap-2">
<div><Image src={review03}/></div>
<div><p className=' font-poppins text-[18px] text-secondaryclr  font-medium'>Brooklyn Simmons</p></div>
    </Flex>
        </div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          </Flex></div>
    </Flex>
</div>
<div className=' px-3 pt-11 pb-2 border-b-2'>
<Flex className="justify-between">
    <div> <Heading className=" font-semibold text-[18px] text-primaryclr " text="“Awesome”" as="h3"/></div>
    <div><p className=' font-poppins text-base text-secondaryclr'>Reviewed 23rd, November</p></div>
</Flex>
</div>
<div className='ml-4 pt-7 pb-12'>
<p className=' font-poppins text-base text-primaryclr w-[600px]'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
</div>



        </div> 
        <div  className=' w-[648px] border-b-2 mt-3'>
           <Link> <p className=' font-poppins font-normal text-base text-secondaryclr'>Show 10+ more reviews</p></Link>
            </div> 
</div>
        </Flex>
    </div>
  )
}

export default Review