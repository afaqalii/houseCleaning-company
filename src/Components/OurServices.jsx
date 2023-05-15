import React from 'react'
import { ourServices } from '../data'
import Button from './Button'

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
    <div className=''>
     <div className="container text-center">
        <h1 className='text-dark-grey text-3xl'>Our Services</h1>
        <div className="flex gap-5">
            {OurServices}
        </div>
        <Button content={"See All Services"} bg={"orange"} color={"white"}/>
     </div>
    </div>
  )
}

export default OurServices