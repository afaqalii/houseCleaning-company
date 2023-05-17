import React from 'react'
import { TbCertificate } from 'react-icons/tb'
import Testimonials from '../Components/Testimonials'
import WhyUs from '../Components/WhyUs'
import CallToAction from '../Components/CallToAction'
const AboutUs = () => {
  return (
    <>
    <div className='container w-full md:w-9/12 px-4  py-20 flex flex-col md:flex-row justify-between'>
        <h1 className='text-5xl text-dark-grey'>About Us</h1>
        <p className='md:w-2/5 mt-5 md:mt-0 text-dark-grey md:mr-16'>We've been serving this wonderful community for more than 30 years. We started as a family business and have bloomed into a company that's 35-people strong and growing. We are dedicated to providing you with the most professional roofing solutions for your needs.</p>
    </div>
    <div className={`about-us-bg bg bg-center bg-cover bg-fixed md:h-[90vh]`}>
        <div className=" about-us-content grid place-content-center w-full h-full">
             <div className="">
                <h1 className='text-5xl pt-8 md:py-0 md:text-6xl text-white text-center'>Certifications</h1>
                  <div className="grid  grid-cols-1 md:grid-cols-3 mx-auto md:w-4/5  px-2 mt-16 gap-10">
                  <div className="flex flex-col items-center text-center bg-white px-4 py-8 md:px-8 md:py-16">
                     <TbCertificate className='text-6xl text-orange'/>
                     <h1 className='text-xl font-bold text-dark-grey mt-6 mb-4'>Working at heights</h1>
                     <p>Every member of our team completes mandatory training to ensure their safety at all times. We follow current safety standards and undergo rigorous and regular training.</p>
                  </div>
                  <div className="flex flex-col items-center text-center bg-white px-4 py-8 md:px-8 md:py-16">
                     <TbCertificate className='text-6xl text-orange'/>
                     <h1 className='text-xl font-bold text-dark-grey mt-6 mb-4'>College Certification </h1>
                     <p>Every member of our team completes mandatory training to ensure their safety at all times. We follow current safety standards and undergo rigorous and regular training.</p>
                  </div>
                  <div className="flex flex-col items-center text-center bg-white px-4 py-8 md:px-8 md:py-16">
                     <TbCertificate className='text-6xl text-orange'/>
                     <h1 className='text-xl font-bold text-dark-grey mt-6 mb-4'>Hazardous Materials Training</h1>
                     <p>Every member of our team completes mandatory training to ensure their safety at all times. We follow current safety standards and undergo rigorous and regular training.</p>
                  </div>
                  </div>
             </div>
        </div>
    </div>
    <WhyUs/>
    <Testimonials/>
    <CallToAction/>
    </>
  )
}

export default AboutUs