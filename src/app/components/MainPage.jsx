import React from 'react'
import styles from './main.module.css'

export default function MainPage() {
  return (
    <section className={styles.main}>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-7xl font-bold text-black'>Delicious African recipes.</h1>
            <h2 className='text-5x font-bold text-white bg-green-700'>Nigerian most popular soups</h2>
        </div>
    </section>
    
    
  )
}
