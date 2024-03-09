import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { IoSearch } from "react-icons/io5";
import Button from '../Button'

const Navbar = ({className}) => {
  return (
<nav className={`${className}: py-12  `}>
    <Container>
    <Flex>
        <div className='w-[15%]'>
        <Image src={logo}/>
        </div>
        <div className=' w-[30%]'>
      <ul>
        <Flex className="gap-14">
            <List className="font-medium text-[20px] text-primaryclr" to="/" text="Destination"/>
            <List className="font-medium text-[20px] text-primaryclr" to="/activities" text="Activities"/>
            <List className="font-medium text-[20px] text-primaryclr" to="/specials" text="Specials"/>
        </Flex>
      </ul>
        </div>
        <div className='w-[30%] pt-1'>
         <button><IoSearch className=' size-6'/></button>
        </div>
        <div className='w-[25%]'>
            <Flex className=" justify-end gap-10">
                <Button text="Login"/>
                <Button text="Sign up"/>
            </Flex>
        </div>
    </Flex>
    </Container>
</nav>
  )
}

export default Navbar