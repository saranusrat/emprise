import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Fliter01 from '../Icons/Fliter01'
import Fliter02 from '../Icons/Fliter02'
import Fliter03 from '../Icons/Fliter03'
import Fliter04 from '../Icons/Fliter04'
import Fliter05 from '../Icons/Fliter05'
import Fliter06 from '../Icons/Fliter06'


const SearchPart = () => {
  return (
<Section >
    <Container >
<div className=' my-10 p-7 border-2 rounded-xl'>
<Flex className="justify-between">
    <div>
        <p className=' font-poppins font-medium text-lg text-primaryclr'>Showing 1 - 10 of 2037 results for “cultural”</p>
    </div>
    <div>
      <Flex className="gap-2">
    <div>  <p className=' font-poppins font-normal text-lg text-secondaryclr'>sort by :</p></div>
       <div> <select  className=' focus:outline-none font-poppins font-bold text-lg text-primaryclr'>
      <option> Most Popular</option>
      <option> Most Popular</option>
      <option> Most Popular</option>
      <option> Most Popular</option>
        </select></div>
      </Flex>
    </div>
</Flex>
</div>
<div className=' mb-12'>
    <Flex className="gap-7">
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter01/>
                <p className=' font-poppins font-normal text-base text-black'>Discounted Deals</p>
            </Flex>
        </div>
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter02/>
                <p className=' font-poppins font-normal text-base text-black'>Free Cancellation</p>
            </Flex>
        </div>
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter03/>
                <p className=' font-poppins font-normal text-base text-black'>Entrada Specials</p>
            </Flex>
        </div>
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter04/>
                <p className=' font-poppins font-normal text-base text-black'>Few Seats Left</p>
            </Flex>
        </div>
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter05/>
                <p className=' font-poppins font-normal text-base text-black'>Private Tours</p>
            </Flex>
        </div>
        <div className=' p-4 w-60 rounded-xl border-2'>
            <Flex className="items-center gap-6">
                <Fliter06/>
                <p className=' font-poppins font-normal text-base text-black'>New on Entrada</p>
            </Flex>
        </div>
    </Flex>
</div>

    </Container>
</Section>
  )
}

export default SearchPart