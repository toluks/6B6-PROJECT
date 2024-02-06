import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


export default function SlugAuthor({img,link,name}) {
  return (
    <div className='flex items-start gap-y-6 bg-[#e55858] w-2/5 p-4 text-white'>
        <Image src={img} alt={name} width={60} height={60} className='bg-white rounded-md mr-6'/>
        <div>
            <p>This recipe is by</p>
            <h3 className='text-3xl'>{name}</h3>
            <Link href={link}>
            <p className='flex items-center'>
                <span className='hover:underline'>View my recipes</span>
                <FaArrowRight />
             </p>
            </Link>
        </div>
    </div>
  )
}
