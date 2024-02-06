import React from 'react'

export default function RecipeColumn(props) {
  return (
    <div className='w-4/5 m-auto py-8 '>
        <h2 className='text-center text-green-600 text-3xl py-4'>My Recipes</h2>
        <div className='grid grid-cols-3 gap-3'>
        {props.data}
    </div>
    </div>
  )
}
