import React from 'react'

const Button = ({content, bg, color, float}) => {
  return (
   <button className={`primary-btn  border-2 border-${color} bg-${bg} text-${color} float-${float} `}>{content}</button>
  )
}

export default Button