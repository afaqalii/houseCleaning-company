import React from 'react'
import Button from './Button'
import { menuItems } from '../data'


const Navbar = () => {
    // a div with 3 sections logo  menu items and CTA logo sze is 215px
    // navbar padding -x is 50px menu items p-x is 15 py 6.8 mt- is 21
    const MenuItems = menuItems.map((item) => {
        return ( 
            <li className='px-4'>
                <a href="#">{item}</a>      
            </li>
        )
    })
  return (
    <div className='flex justify-between items-center py-8 px-12'>
        {/* navbar logo */}
        <div className="w-[215px]">
            <img src="https://irp.cdn-website.com/md/dmtmpl/824fd22d-0590-4ecc-a120-4e867939e215/dms3rep/multi/Logo-861d487a.svg" alt="" />
        </div>
        {/* MENU ITEMS */}
        <div className="w-[50%]">
           <ul className='flex items-center justify-start'>
            {MenuItems}
           </ul>
        </div>
        {/* CTA */}
       <div className="'">
          <Button content={"Get a free Estimate"} color={'orange'}/>
       </div>
    </div>
  )
}

export default Navbar
