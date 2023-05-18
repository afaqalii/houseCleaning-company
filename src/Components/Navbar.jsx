import React, { useEffect, useState } from 'react'
import Button from './Button'
import { menuItems } from '../data'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.svg"

const Navbar = ({show}) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
       window.scrollTo(0,0)
    },[location])

    const MenuItems = menuItems.map((item) => {
        return ( 
            <li className='relative py-5 p-8 lg:px-4  whitespace-nowrap  lg:after:w-0'>
                <Link to={`/${item}`} >{item}</Link>      
            </li>
        )
    })
      return (
    <div className='flex justify-between items-center py-4 px-5 lg:px-12'>
        {/* navbar logo */}
        <div className="w-[215px]">
           <Link to={`/`}> <img src={logo} alt="" /></Link>
        </div>  
        {/* MENU ITEMS */}
        <div className={`hidden  w-[40%] lg:flex`}>
           <ul className={`flex-row flex items-center justify-start pb-0`}>
            {MenuItems}
           </ul>
        </div>
        {/* MENU ITEMS FOR small screens */}
        <div className={`absolute top-[70px] ${toggleMenu ? 'left-0': 'left-[-100%]'} bg-white z-10 w-full`}>
          <ul className='flex-col text-left flex items-center justify-start pb-5'>
          {
            menuItems.map((item) => (
              <li onClick={() => setToggleMenu(prevState => !prevState)} className='relative py-5 p-8  w-full whitespace-nowrap text-dark-grey  text-left  after:absolute after:w-[15%] after:h-[2px] after:bottom-[-40px] after:left-[30px]  after:bg-orange after:mb-10'>
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))
          }
          </ul>
        </div>
        {/* CTA */}
       {/* <div className={`${!show ? 'flex' : 'hidden'}`}>
          {children}
       </div> */}
       <Link to={'/contact'}><div className={`${show ? 'hidden' : 'flex'}`}><Button  content={"Get a free Estimate"} color={'orange'}/></div></Link>
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
