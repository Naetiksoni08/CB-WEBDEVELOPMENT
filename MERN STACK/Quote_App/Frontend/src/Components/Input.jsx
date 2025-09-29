import React from 'react'

const Input = ({title,type="text"}) => {
  return (
    <div className='mb-3'>
        <div className='font-semibold mb-2'>{title}</div>
        <input className='outline-1 outline-gray-400 rounded-lg w-full p-2' type={type} />
    </div>
  )
}

export default Input