import React from 'react'
import { Link } from 'react-router-dom'


const List = ({className,to,text}) => {
  return (
  <li><Link className={`${className}: font-poppins`} to={to}>{text}</Link>
  </li>
  )
}

export default List