import React from 'react'
import Button from './Button'
import { ComparisonSlider } from './ComparisonSlider'
import { Link } from 'react-router-dom'
const OurWork = () => {
  return (
    <div className='py-32'>
        <div className="container flex flex-col items-center gap-10">
        <h1 className='text-center text-5xl'>Our Work</h1>
            <div className="w-full">
                <ComparisonSlider/>
            </div>
           <div>
          <Link to='/services'>
            <Button content={"See All Projects"} color={"white"} bg={"orange"} />
          </Link> 
           </div>
        </div>
    </div>
  )
}

export default OurWork