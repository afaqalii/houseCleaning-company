import React from 'react'
import Button from '../Components/Button'
import video from "../assets/cleaning-2333.mp4"
import OurServices from '../Components/OurServices'
import HowWeWork from '../Components/HowWeWork'
import WhyUs from '../Components/WhyUs'
import Testimonials from '../Components/Testimonials'
import OurWork from '../Components/OurWork'
import NewsBlog from '../Components/NewsBlog'
import CallToAction from '../Components/CallToAction'
const Home = () => {
  return (
   <> 
      <div className="relative lg:h-full">
        <video src={video} autoPlay loop muted className=' h-[130vh] lg:h-[90vh] w-full object-cover'></video>
        <div className="overlay h-full w-full absolute left-0 top-0 bg-black"></div>
        <div className="container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col lg:flex-row justify-between">
            <div className="lg:w-2/5">
                <h1 className='text-white text-4xl lg:text-6xl'>We are your roofing partner</h1>
                <p className='text-white text-sm lg:text-base  my-9 w-4/5'>We follow rigorous procedures, developed by leading international manufacturers, to ensure the very best roof installation. We use the latest technology to ensure top quality service from start to finish. You're able to track and view the process every step of the way.</p>
                <Button content={"Get a free estimate"} color={"white"} />
            </div>
            <div className="mt-5 lg:mr-[12rem]">
                <div className="relative flex flex-col after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-orange after:mb-10">
                    <h2 className='text-2xl text-white mb-1'>Hours</h2>
                    <p className='relative text-white mb-12'>24/7</p>
                </div>
                <div className="relative flex flex-col after:absolute after:w-full after:h-[2px]  after:bottom-0 after:left-0  after:bg-orange after:mb-10">
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
      <OurServices/>
      <HowWeWork/>
      <WhyUs/>
      <Testimonials/>
      <OurWork/>
      <NewsBlog/>
      <CallToAction/>
   </>
  )
}

export default Home