import React from 'react'
import { howWeWork } from '../data'
import shingle from "../assets/shingle-roof.jpg"

const HowWeWork = () => {
    const HowWeWork = howWeWork.map((work) => {
        return (
            <div className="relative flex items-center gap-10 after:absolute after:w-full after:h-[2px] after:bottom-[-30px] after:left-0  after:bg-orange mb-20">
                <h3 className='text-3xl'>{work.title}.</h3>
                <p className='text-lg'>{work.content}</p>
            </div>
        )
    })
  return (
    <div className='bg-grey py-32'>
       <div className="container flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-2/4">
            <img src={shingle} alt="" />
        </div>
        <div className="lg:w-2/4">
            <h1 className='text-[40px] mb-10'>How We Work</h1>
            {HowWeWork}
        </div>
       </div>
    </div>
  )
}

export default HowWeWork