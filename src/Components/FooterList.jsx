import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = ({className,to,text}) => {
  return (
    <li className='pb-3'><Link className={`${className}: font-poppins font-normal  text-base text-secondaryclr`} to={to}>{text}</Link>
    </li>
  )
}

export default FooterList