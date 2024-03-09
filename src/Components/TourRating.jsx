import React from 'react'
import Lable from './Lable'
import { FaStar } from "react-icons/fa";
import Flex from './Flex';
import Checkbox from './Checkbox';



const TourRating = () => {
  return (
    <div>
      <Lable text="Tour Rating"/>
   
      <Flex className="gap-4  mt-4">
        <div><Checkbox/></div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          </Flex></div>
      </Flex>
      <Flex className="gap-4  mt-4">
        <div><Checkbox/></div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5  text-yellow-500'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          </Flex></div>
      </Flex>
      <Flex className="gap-4  mt-4">
        <div><Checkbox/></div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-gray-400'/>
          <FaStar className=' size-5 text-gray-400'/>
          </Flex></div>
      </Flex>
      <Flex className="gap-4  mt-4">
        <div><Checkbox/></div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-gray-400'/>
          </Flex></div>
      </Flex>
      <Flex className="gap-4  mt-4">
        <div><Checkbox/></div>
        <div><Flex className="gap-2">
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          <FaStar className=' size-5 text-yellow-500'/>
          </Flex></div>
      </Flex>
    </div>
  )
}

export default TourRating