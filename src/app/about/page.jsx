import React from 'react'
import styles from './aboutus.module.css'
import { GoArrowUp } from "react-icons/go"
import Image from 'next/image'
import Link from 'next/link'
import Cooks from './Cooks'

export default function page() {
  return (
  <section>
    <section>
    <div className={styles.aboutTop}>
      <div className='h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold'>About Recipe</h1>
        <h2 className='text-2xl font-semi-bold text-black'>About our soups and their recipes</h2>

      </div>

  </div>
   <section>
      <div className='grid grid-cols-2 gap-8 py-10 w-4/5 m-auto'>
      <p className='font-semibold' style={{lineHeight: 2}}>Toluks Soup Recipe Blog is an African Food Culinary Network, popularly known as Toluks Afican Recipes is a website dedicated to African food and lifestyle.   </p>

      <p>Toluks commitment is simplicity at its peak. It was created to help redefine the world&apos;s view of African cuisines, chefs, and traditional cooks. Africa is blessed with a lot of food bloggers and they are changing the perception of the western world towards the African continent, its food, recipes, cooks, and chefs.</p>

     </div>
    </section>
    </section>

    <section className='bg-green-500 py-10'>

    <section className={`grid md:grid-cols-3 grid-cols-1 gap-4 w-3/4 m-auto ${styles.about}`}>

        <Cooks 
        source='/mykitchen.jpg' cookName='My Diaspora Kitchen'
        cookInfo='A food blog with easy to make recipes. No fluff just deliciousness 😋 including foolproof Instant pot and Air fryer recipes'/>
        
        <Cooks 
        source='/yemmie.jpg' cookName='Sisi Yemmie'
        cookInfo='Nigerian Lifestyle Blogger and Content Creator: I write about Blogging, Motherhood, Food & More!'/>
        
        <Cooks 
        source='/ajoke.jpeg' cookName='Ajoke'
        cookInfo='Hello, my name is Ajoke and welcome to my food world.'/>
       
        <Cooks 
        source='/lola.png' cookName='Lola Osinkolu'
        cookInfo='My name is Lola, and this is the space where I share my fast, easy, family-friendly meals!'/>
        
        <Cooks 
        source='/aliyah.jpg' cookName='Aliyah Recipes'
        cookInfo='Mom, wife, and blogger. Join me @ aliyahsrecipesandtips.com for delicious, easy, meals and much more.'/>
       
        <Cooks 
        source='/afrolems.webp' cookName='Afrolems'
        cookInfo='Afrolems is an African food blog with a specialization in Nigerian Food.'/>




    </section>

    <div className='flex flex-row-reverse px-5'>
      <Link href='#top'>
      <div className={styles.back}>
        <span><GoArrowUp /></span>
        <button>Back To Top</button>

      </div>
      </Link>

    </div>
  </section>
  
    </section>
 
  )
}
