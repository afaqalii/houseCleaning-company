import React, { useState } from 'react'
import Icons from './Icons'
import { Link } from 'react-router-dom'
import { menuItems } from '../data'

const Footer = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const MenuItems = menuItems.map((item) => {
      return ( 
          <li className='relative py-5 p-8 lg:px-4 w-full whitespace-nowrap text-dark-grey  text-left  after:absolute after:w-[15%] after:h-[2px] after:bottom-[-40px] after:left-[30px]  after:bg-orange after:mb-10 lg:after:w-0'>
              <Link to={`/${item}`} >{item}</Link>      
          </li>
      )
  })
  return (
    <div className='flex justify-between items-center py-4 px-5 lg:px-12'>
        {/* navbar logo */}
        <div className="w-[215px]">
           <Link to={`/`}> <img src="https://irp.cdn-website.com/md/dmtmpl/824fd22d-0590-4ecc-a120-4e867939e215/dms3rep/multi/Logo-861d487a.svg" alt="" /></Link>
        </div>  
        {/* MENU ITEMS */}
        <div className={`${toggleMenu ? 'absolute top-[70px] left-0 bg-white z-10' : 'hidden' }   w-full  lg:w-[40%] lg:flex`}>
           <ul className={`${toggleMenu ? 'flex-col text-left': 'flex-row'} flex items-center justify-start pb-5 lg:pb-0`}>
            {MenuItems}
           </ul>
        </div>
        {/* MENU ITEMS FOR small screens */}
        <div className=""></div>       
       <Icons/>
    </div>
  )
}

export default Footer