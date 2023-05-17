import React from 'react'
import { OurServicesData} from '../data'
import CallToAction from '../Components/CallToAction'
const OurServices = () => {
    
  return (
    <>
    <div className='container  my-20'>
        <h1 className='my-8 text-6xl mb-20 text-dark-grey'>Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
           {
             OurServicesData.map((service) => {
                return (
                    <div className="">
                    <div className=" w-[250px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[380px] cursor-pointer">
                      <img className='w-full h-full object-cover ease-in duration-300 hover:scale-105' src={service.img} alt="Services image" />
                    </div>
                      <h1 className='text-4xl my-10 text-dark-grey'>{service.title}</h1>
                      <p className='mb-5 text-dark-grey'>{service.para}</p>
                      <p className=' text-dark-grey'>{service.para2}</p>
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

export default OurServices