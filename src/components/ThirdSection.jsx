import React from 'react'
import Chamkeeli from './Chamkeeli'
import AsimJofaKids from './AsimJofaKids'
import Luxury from './Luxury'
import { NavLink, Outlet } from 'react-router-dom'

const ThirdSection = () => {
  return (
    <div className='third-section'>
      <div className='third-nav'>
        <NavLink to={''}>Chamkeeli</NavLink>
        <NavLink to={'/asimjofakids'}>Asim Jofa kids</NavLink>
        <NavLink to={'/afsanay'}>Afsanay-luxury pret</NavLink>
       
      </div>
      
      <Outlet/>
    </div>
  )
}

export default ThirdSection
