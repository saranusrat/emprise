import React from 'react'
import Banner from '../Banner'
import Catergory from '../Catergory'
import Tour from '../Tour'
import Destination from '../Destination'
import Guides from '../Guides'
import Adventure from '../Adventure'
import Support from '../Support'
import Seller from '../Seller'
import Navbar from '../Navbar'


const Home = () => {
  return (
<>
<Navbar className=" z-20  w-full absolute "/>
<Banner/>
<Catergory/>
<Tour/>
<Destination/>
<Seller Hdtxt="Best Seller"/>
<Guides/>
<Adventure/>
<Support/>
</>
  )
}

export default Home