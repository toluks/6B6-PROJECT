import React from 'react'

export default function SlugIngredient({data}) {
  return (
    <div className='w-4/5 bg-[#e3dfbf] p-6'>
        <h2 className='text-green-600 text-2xl'>Ingredients</h2>
        <ul>
            {
                data.map((datum,index )=> (
                    <li key={index} className='border-y-2 border-gray-700'>{datum}</li>
                ))
            }
        </ul>
    </div>
  )
}
