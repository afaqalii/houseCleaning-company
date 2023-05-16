import React from 'react'
import Button from './Button'
import civilEng from "../assets/civil-eng.jpg"
const OurWork = () => {
  return (
    <div className='py-32'>
        <div className="container flex flex-col items-center gap-10">
        <h1 className='text-center text-5xl'>Our Work</h1>
            <div className="">
                <img src={civilEng} alt="" />
            </div>
           <div>
           <Button content={"See All Projects"} color={"white"} bg={"orange"} />
           </div>
        </div>
    </div>
  )
}

export default OurWork