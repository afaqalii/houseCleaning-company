import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='bg-orange grid place-content-center py-32'>
       <div className="flex items-center flex-col gap-10">
          <h1 className='text-center text-white text-6xl lg:w-3/5'>Tell us about your roofing project</h1>
         <Link to={'/contact'}>
          <Button content={"Get a free estimate"} color={"white"} />
         </Link>
       </div>
    </div>
  )
}

export default CallToAction