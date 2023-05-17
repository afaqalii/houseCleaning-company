import React, { useEffect, useState } from 'react'
import Button from './Button'
import { menuItems } from '../data'
import { Link } from 'react-router-dom'


const Navbar = ({children, show}) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const MenuItems = menuItems.map((item) => {
        return ( 
            <li className='relative py-5 p-8 lg:px-4 w-full whitespace-nowrap text-dark-grey  text-left  after:absolute after:w-[15%] after:h-[2px] after:bottom-[-40px] after:left-[30px]  after:bg-orange after:mb-10 lg:after:w-0'>
                <Link to={`/${item}`} >{item}</Link>      
            </li>
        )
    })
      return (
    <div className='flex justify-between items-center py-8 px-5 lg:px-12'>
        {/* navbar logo */}
        <div className="w-[215px]">
            <img src="https://irp.cdn-website.com/md/dmtmpl/824fd22d-0590-4ecc-a120-4e867939e215/dms3rep/multi/Logo-861d487a.svg" alt="" />
        </div>  
        {/* MENU ITEMS */}
        <div className={`${toggleMenu ? 'absolute top-[105px] left-0 bg-white z-10' : 'hidden' }   w-full  lg:w-[40%] lg:flex`}>
           <ul className={`${toggleMenu ? 'flex-col text-left': 'flex-row'} flex items-center justify-start pb-5 lg:pb-0`}>
            {MenuItems}
           </ul>
        </div>
        {/* MENU ITEMS FOR small screens */}
        <div className=""></div>
        {/* CTA */}
       <div className={`${!show ? 'flex' : 'hidden'}`}>
          {children}
       </div>
       <div className={`${!show ? 'flex' : 'hidden'}`}><Button  content={"Get a free Estimate"} color={'orange'}/></div>
     {/* menu Icons for small screen */}
     <div className={`navbar-toggler ${show ? 'flex': 'hidden'} flex flex-col gap-1 lg:hidden`} onClick={() => setToggleMenu(prevState => !prevState)} >
        <span className={` ${toggleMenu ? 'active': ''} h-1 ease-in duration-300 bg-dark-grey w-8`}></span>
        <span className={` ${toggleMenu ? 'active': ''} h-1 ease-in duration-300 bg-dark-grey w-8`}></span>
        <span className={` ${toggleMenu ? 'active': ''} h-1 ease-in duration-300 bg-dark-grey w-8`}></span>
     </div>
    </div>
  )
}

export default Navbar
