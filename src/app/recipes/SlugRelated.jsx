import Link from "next/link"
import { IoMdTime } from "react-icons/io"

function randomThree(arr, num){
    const randomVal = []
    const arrLength = arr.length
    
    for(let x = 0; x < num; x++){
        const randomIndex = Math.floor(Math.random()*arrLength)
        randomVal.push(arr[randomIndex])
    }

    return randomVal
}

export default function SlugRelated({relatedData}) {

    const relatedValues = randomThree(relatedData, 3)

   const data = relatedValues.map(recipe => (
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
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">{data}</div>
  )
}
