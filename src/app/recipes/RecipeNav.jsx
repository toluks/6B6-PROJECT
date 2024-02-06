import React from 'react'
import Link from 'next/link'
import styles from './recipe.module.css'

export default function RecipeNav() {
  return (
    <div>
          <nav className={styles.nav}>
        <ul className='flex  justify-around space-x-4'>
            <Link href='/recipes/'>
              <li>all recipe</li>
            </Link>
            <Link href='/recipes/hausa'>
              <li>hausa</li>
            </Link>

            <Link href='/recipes/igbo'>
              <li>igbo</li>
            </Link>

            <Link href='/recipes/yoruba'>
              <li>yoruba</li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}
