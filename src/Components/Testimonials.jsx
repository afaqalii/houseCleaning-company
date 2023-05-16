import React from 'react'
import civilEng  from "../assets/civil-eng.jpg"
import { testimonials } from '../data'
const Testimonials = () => {
    const Testimonials = testimonials.map((review) => {
        const rating = review.stars.map((star) => star)
        return (
            <div className="flex flex-col gap-3">
                <div className="flex text-orange text-2xl">{rating}</div>
                <p className='text-dark-grey'>{review.content}</p>
                <h3 className='text-2xl'>{review.name}</h3>
            </div>
        )
    })
  return (
    <div className='relative py-10 lg:py-32'>
        <div className="">
            <img src={civilEng} className='' alt="Civil Engineer At Work" />
        </div>
        <div className=" lg:absolute top-[50px] left-[10%] flex flex-col lg:w-2/5 bg-white gap-20 lg:gap-5 p-8">
            {Testimonials}
        </div>
    </div>
  )
}
export default Testimonials