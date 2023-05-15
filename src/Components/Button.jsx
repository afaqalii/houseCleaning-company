import React from 'react'

const Button = ({content, bg, color}) => {
  return (
   <button className={`primary-btn  border-2 border-${color} bg-${bg} text-${color} `}>{content}</button>
  )
}

export default Button