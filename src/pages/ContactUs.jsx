import React from 'react'
import Button from '../Components/Button'

const ContactUs = () => {
  return (
    <div className='container w-full md:w-9/12 px-4 md:px-0 py-20 flex flex-col lg:flex-row justify-between gap-20'>
        <div className="lg:w-2/5 flex flex-col">
            <h1 className='text-5xl mb-10 text-dark-grey'><span className='w-full'>Let’s talk</span> about your roof</h1>
            <input type="text" className='outline-none py-8 border-b-2 border-b-light-grey' placeholder='Name' />
            <input type="text" className='outline-none py-8 border-b-2 border-b-light-grey' placeholder='Email' />
            <input type="text" className='outline-none py-8 border-b-2 border-b-light-grey' placeholder='Service' />
            <div className='mt-10'><Button content={"Get an Estimate"} float={"right"} bg={'orange'} color={"white"}/></div>
        </div>
        <div className="lg:w-2/5 bg-orange">
        <div className="py-16 px-8">
                <div className="relative flex flex-col after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-white after:mb-10">
                    <h2 className='text-2xl text-white mb-1'>Hours</h2>
                    <p className='relative text-white mb-12'>24/7</p>
                </div>
                <div className="relative flex flex-col after:absolute after:w-full after:h-[2px]  after:bottom-0 after:left-0  after:bg-white after:mb-10">
                    <h2 className='text-2xl text-white mb-1'>Service area</h2>
                    <p className='relative text-white mb-12  '>Downtown Seattle</p>
                </div>
                <div className="flex flex-col mb-12">
                    <h2 className='text-2xl text-white'>Contact</h2>
                    <p className='text-white mb-2'>555-555-5555</p>
                    <p className='text-white mb-12'>mymail@mailservice.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs