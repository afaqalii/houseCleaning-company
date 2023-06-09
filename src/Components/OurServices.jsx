import React from 'react'
import { ourServices } from '../data'
import Button from './Button'
import { Link } from 'react-router-dom'

const OurServices = () => {
    const OurServices = ourServices.map((service) => {
        const {title, icon, content} = service
        return (
            <div className="flex flex-col items-center gap-5 mt-20">
                {icon}
                <h2 className='text-2xl text-dark-grey'>{title}</h2>
                <p>{content}</p>
            </div>
        )
    })
  return (
    <div className='grid place-content-center py-16 lg:py-32'>
     <div className="container text-center">
        <h1 className='text-dark-grey text-3xl'>Our Services</h1>
        <div className="flex flex-col lg:flex-row gap-5">
            {OurServices}
        </div>
        <div className="mt-20">
           <Link to={`/services`}><Button content={"See All Services"} bg={"orange"} color={"white"}/></Link>
        </div>
     </div>
    </div>
  )
}

export default OurServices