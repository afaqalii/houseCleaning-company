import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className='flex gap-5 text-2xl cursor-pointer text-orange'>
          <FaTwitter/>
          <FaLinkedin/>
          <FaInstagram/>
    </div>
  )
}

export default Icons