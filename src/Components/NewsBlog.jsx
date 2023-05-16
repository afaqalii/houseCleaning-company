import React from 'react'
import { newAndBlogs } from '../data'

const NewsBlog = () => {
    const NewsAndBlogs = newAndBlogs.map((item) => {
        return (
         <div className="flex flex-col gap-5">
            <h1 className='text-2xl'>{item.title}</h1>
            <p className='text-dark-grey'>{item.content}</p>
         </div>
        )
    } )
  return (
    <div>
        <div className="container py-10 lg:py-32 flex flex-col items-center gap-20">
            <h1 className='text-5xl text-dark-grey'>News & Blog</h1>
              <div className="flex flex-col lg:flex-row gap-10">
                {NewsAndBlogs}
              </div>
        </div>
    </div>
  )
}

export default NewsBlog