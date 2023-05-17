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
    <div className='lg:relative xl:mb-40 py-10 lg:py-32 lg:h-[80vh] xl:h-[70vh] 2xl:h-[40vh]'>
        <div className="static lg:absolute right-0 top-[40px] lg:w-[800px] xl:w-[1200px]">
            <img src={civilEng} className='' alt="Civil Engineer At Work" />
        </div>
        <div className="static lg:absolute top-[50px] lg:left-[20px] xl:left-[5%] flex flex-col lg:w-2/5 bg-white gap-20 lg:gap-5 p-8">
            {Testimonials}
        </div>
    </div>
  )
}
export default Testimonials