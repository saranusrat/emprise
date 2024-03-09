import React from 'react'
import SearchPart from '../SearchPart'
import Navbar from '../Navbar'
import InputChart from '../../InputChart'
import MiddlePart from '../MiddlePart'
import Seller from '../Seller'


const Activities = () => {
  return (
  <>
  <Navbar className=" block"/>
  <SearchPart/>
  <MiddlePart/>
  <Seller Hdtxt="Recently Viewed"/>
  </>
  )
}

export default Activities