import Link from 'next/link'
import tolu from './main.module.css'

export default function Category() {
  return (
    <div>
      <div className='text-center'>

      <h2 className='text-4xl py-6 bg-yellow-300' >Most Popular Category</h2>
      <p className='text-2xl py-4'>Be sure not to miss out the categories of these most popular categories. Enjoy trying them out!</p>
      </div>
   
    <div className={tolu.category}>
        <Link href='/recipes/yoruba'>
        <div>
            <h2>Yoruba Soup</h2>
        </div>
        </Link>

        <Link href='/recipes/igbo'>
        <div>
            <h2>Igbo Soup</h2>
        </div>
        </Link>

        <Link href='/recipes/hausa'>
        <div>
            <h2>Hausa Soup</h2>
        </div>
        </Link>

        </div>
    </div>

  )
}
