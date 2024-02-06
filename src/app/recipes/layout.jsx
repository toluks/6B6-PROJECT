import React from 'react'
import RecipeNav from './RecipeNav'


export const metadata = {
    title: 'Toluks | All Yoruba Dishes',
    description: 'Yoruba food recipes across Nigeria',
  }

export default function layout({children}) {
  return (
    <div className='grid  grid-cols-1 gap-4 py-8'>
        <RecipeNav />
        {children}
    </div>
  )
}
