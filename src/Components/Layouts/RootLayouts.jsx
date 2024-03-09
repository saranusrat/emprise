import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const RootLayouts = () => {
  return (
   <>

   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayouts