import React from 'react'
import CookHeader from '../CookHeader'
import { recipesData } from '@/app/recipes/page'
import Description from '../Description'
import RecipeColumn from '../RecipeColumn'
import Link from 'next/link'
import { IoMdTime } from "react-icons/io"

export default function page({params}) {
    const cookData = recipesData.find(data =>  params.slug.includes(data.author.toLowerCase().slice(0,2)))
    const cookFull = recipesData.filter(data =>  params.slug.includes(data.author.toLowerCase().slice(0,2)))

    
  const data = cookFull.map(recipe => (
    <section key={recipe.id} style={{backgroundImage: `url(/images/${recipe.image[2]}.jpg`}} className='bg-cover rounded-lg'>
      <Link href={`/recipes/${recipe.name.split(' ').join('-')}`}>
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
      </Link>
    </section>
  ))
  return (
    <div>
        <CookHeader source={cookData.author} info={cookData.author_description.slice(0, cookData.author_description.indexOf('.'))}
        img={cookData.author.toLowerCase().slice(0,2)}
        fullInfo={cookData.author_description}/>

        <Description description = {cookData.author_description}/>

        <RecipeColumn data={data}/>
    </div>
  )
}
