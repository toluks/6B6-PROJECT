import React from 'react'

export default function Description(props) {
  return (
    <div className='py-8 bg-gray-300 px-5'>
        <h2 className='text-center text-green-700 text-3xl py-4'>In short about myself.</h2>
        <p>{props.description}</p>
    </div>
  )
}
