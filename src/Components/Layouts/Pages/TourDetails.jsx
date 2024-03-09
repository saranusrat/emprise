import React from 'react'
import Navbar from '../Navbar'
import SpecialMiddle from '../SpecialMiddle'
import Seller from '../Seller'
import SpecialSlid  from '../SpecialSlid'


const TourDetails = () => {
  return (
  <>
  <Navbar className="block"/>
  <SpecialSlid/>
<SpecialMiddle/>
<Seller Hdtxt="Similar Tours"/>

  </>
  )
}

export default TourDetails