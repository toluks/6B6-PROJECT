import React from 'react'

export default function SlugInfo({title, desc}) {
  return (
    <div className='py-2'>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}
