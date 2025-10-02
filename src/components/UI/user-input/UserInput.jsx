import React from 'react'

const UserInput = ({type , placeholder , value , onChange}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={(e)=> {onChange(e.target.value)}} />
  )
}

export default UserInput
