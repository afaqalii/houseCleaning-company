import React from 'react'
import Button from './Button'
import {FaGreaterThan} from "react-icons/fa"

const WhyUs = () => {
  return (
    <div className='py-32'>
        <div className="container flex flex-col items-center gap-20">
            <h1 className='text-4xl'>Why Us</h1>
            <div className="flex flex-col lg:flex-row gap-28">
                <div className="text-center">
                    <h1 className='text-7xl text-orange'>20</h1>
                    <p className='text-lg'>Years of experience</p>
                </div>
                <div className="text-center">
                    <h1 className='flex text-center text-7xl text-orange'><span><FaGreaterThan/></span>500</h1>
                    <p className='text-lg'>Successful projects</p>
                </div>
                <div className="text-center">
                    <h1 className='text-7xl text-orange'>35</h1>
                    <p className='text-lg'>Trained professionals</p>
                </div>
            </div>
            <div>
                <Button content={"More About Us"} color={"white"} bg={"orange"}/>
            </div>
        </div>
    </div>
  )
}

export default WhyUs