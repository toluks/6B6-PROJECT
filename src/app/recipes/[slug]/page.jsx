import RecipeNav from '@/app/recipes/RecipeNav'
import { recipesData } from '@/app/recipes/page'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SlugInfo from '../SlugInfo'
import { FaArrowLeftLong } from "react-icons/fa6";
import SlugBanner from '../SlugBanner'
import SlugIngredient from '../SlugIngredient'
import SlugProcedure from '../SlugProcedure'
import SlugAuthor from '../SlugAuthor'
import SlugRelated from '../SlugRelated'


export default function page({params}) {
  const recipeInfo = recipesData.find(food => food.name.split(' ').join('-')== params.slug)
  const related = recipesData.filter(food => (food.category == recipeInfo.category) && (food.name !==recipeInfo.name))


  return (
    <>
    <div className='w-3/5 m-auto'>
      <Link href='/recipes'>
      <div className='text-green-500 flex items-center space-x-4 text-sm'>
        <FaArrowLeftLong />
        <p>Back to overview</p>
      </div>
      </Link>
      <SlugInfo title={recipeInfo.name} desc={recipeInfo.description.slice(0, recipeInfo.description.indexOf('.')+1)}/>

     
    </div >
    <div>
      <SlugBanner image = {recipeInfo.image} cat = {recipeInfo.category} time = {recipeInfo.time}/>

    </div>

    <div className='w-5/6 m-auto grid grid-cols-2 gap-y-4'>
    <SlugIngredient data = {recipeInfo.ingredients}/>
    <SlugProcedure process = {recipeInfo.procedure}/>
    </div>

    <div className='bg-[#eae2d3] h-[40vh] flex justify-center flex-col'>
    <SlugAuthor name={recipeInfo.author} link = {`/cooks/${recipeInfo.author.toLowerCase().split(' ').join('-')}`} img = {`https://robohash.org/${recipeInfo.author}`}/>
    </div>

    <div className='bg-green-600 py-10 px-8 pb-[200px]'>

      <h2 className='py-6 text-white'>Related Recipes</h2>
      <SlugRelated relatedData = {related}/>
    </div>
    </>
  )
}
