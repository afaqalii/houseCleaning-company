import React from 'react'
import CallToAction from '../Components/CallToAction'
import { NewsAndBlogsData, OurServicesData } from '../data'

const NewAndBlog = () => {
  return (
    <>
    <div className='container my-20'>
        <h1 className='my-8 text-6xl mb-20 text-dark-grey'>News & Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3">
           {
             NewsAndBlogsData.map((service) => {
                return (
                    <div className="">
                    <div className="w-[350px] h-[280px] cursor-pointer">
                      <img className='w-full h-full object-cover ease-in duration-300 hover:scale-105' src={service.img} alt="Services image" />
                    </div>
                      <h1 className='text-2xl my-10 text-dark-grey'>{service.title}</h1>
                      <p className='mb-2 text-dark-grey w-11/12'>{service.para}</p>
                    </div>
                )
            })
        
           }
        </div>
    </div>
    <CallToAction/>
    </>
  )
}

export default NewAndBlog