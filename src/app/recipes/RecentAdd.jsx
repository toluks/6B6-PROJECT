import React from 'react'
import { recipesData } from './page'
import { IoMdTime } from "react-icons/io";


export default function RecentAdd() {
    const recentlyAdded = recipesData.slice(recipesData.length-6)

    const data = recentlyAdded.map(recipe => (
        <section key={recipe.id} style={{backgroundImage: `url(/images/${recipe.image[2]}.jpg`}} className='bg-cover rounded-lg'>
    
        <p className='text-center text-white flex justify-end capitalize'>
          <span className='bg-[#2e2d2d9e] w-2/5 px-3 py-2 m-3 rounded-md '>
          {recipe.category}
          </span>
          </p>
        <section className={`h-[230px] shadow-lg hover:shadow-2xl flex flex-col items-start px-8 justify-end py-4 `} >
    
          
          <p className='font-semibold text-white flex items-center gap-2'>
          <IoMdTime />
          <span>
          {recipe.time < 60 ? recipe.time + 'mins' : `${parseInt((recipe.time/60))}hr ${recipe.time % 60}min`}
          </span>
          </p>
          <h2 className='text-white font-bold'>{recipe.name}</h2>
        </section>
        </section>
      ))
      
      return (
        <div>
            <div className='text-center py-6'>
                <h2 className='text-4xl py-3 bg-yellow-300'>Recently Added</h2>
            </div>

      <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[repeat(8,300px)] gap-4 w-4/5 m-auto'>
        
        {data}
        </div>
      </div>
      )
}
