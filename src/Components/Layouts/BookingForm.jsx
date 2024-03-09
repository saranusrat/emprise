import React from 'react'
import Heading from '../Heading'
import Flex from '../Flex'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import SelectAP from './SelectAP';


const BookingForm = () => {

  return (
    <div className='w-[376px] px-8 rounded bg-reviewbg'>
<div>
<Heading as="h4" text="£2469" className=" text-[14px]  font-medium  text-red-500 pt-6" />
   <Flex className="items-center gap-2 py-2">
    <Heading as="h4" text="£1759" className="text-[36px]  font-bold" />
  <p className=' font-poppins font-medium text-[14px] text-secondaryclr'>per person</p>
   <button className='ml-4  py-3 p-4 rounded-[24px] font-poppins font-medium text-base text-thirdclr bg-teal-100'>20% OFF</button>
   </Flex>
   <p className=' font-poppins font-medium text-[14px] text-secondaryclr'>*Price based on selections bellow.</p>
</div>
<div className='pt-10'> <Heading as="h4" text="Dates" className="text-base font-medium  text-primaryclr tracking-[0.5px] "/>
<input type='date' className='mt-3 border-2 w-[328px] py-2  rounded-lg  bg-reviewbg focus:outline-none font-poppins text-base text-secondaryclr'/> 
 </div>
 <div className=" pt-5">
 <Heading as="h4" text="Travelers" className="  text-base  text-secondaryclr font-medium tracking-[0.5px] py-2"/>
 <div className="relative">
 <input type='text' className='mt-3 border-2 w-[328px] py-2  rounded-lg  bg-reviewbg focus:outline-none  placeholder:font-poppins placeholder:text-base placeholder:text-secondaryclr' placeholder='2 Adult, 1 Child'/>
                {/* <Flex className="items-center gap-1 absolute top-2 right-7 pr-2" >
                  <button onClick={() => dispatch(decrement())}>
                    <CiCircleMinus className="text-[18px]" />
                  </button>
                  {data}
                  <CiCirclePlus
                    className="text-[18px]"
                    onClick={() => dispatch(increment())}
                  />
                </Flex> */}
   </div>
 </div>
 <div className=" pt-5">
 <Heading as="h4" text="Selections" className="text-base  text-secondaryclr font-medium  py-2 " />

 <div className="relative">
 <input type="text" className='mt-3 border-2 w-[328px] py-2  rounded-lg  bg-reviewbg focus:outline-none  placeholder:font-poppins placeholder:text-base placeholder:text-secondaryclr'placeholder='Flight, hotel, car etc.' />
<SelectAP/>
 </div>
 </div>
 <div className='py-10'>
<button className=' px-16 py-3 bg-orange-400 font-poppins font-semibold text-[18px] text-white rounded-lg'>Check Availability</button>
 </div>
    </div>
  )
}

export default BookingForm