import React from 'react'

const Button = ({children , type = "submit" , onClick}) => {
  return (
    <button onClick={onClick} type={type}>{children}</button>
  )
}

export default Button
