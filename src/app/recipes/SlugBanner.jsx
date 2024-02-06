import React from 'react'
import styles from './recipe.module.css'
import { IoMdTime } from 'react-icons/io'
import { TbCategoryFilled} from 'react-icons/tb'

export default function SlugBanner({time, image, cat}) {
  return (
    <div style={{backgroundImage: `url(/images/${image[0]}.jpg)`,height: '70vh'}} className={styles.slug}>
        <div className='bg-[#fffefe97] text-black p-6'>
            <ul>
                <li className='flex items-start px-4'>
                <TbCategoryFilled />
                <span className='flex flex-col'>
                    <span className='text-green-800 font-bold'>Category</span>
                    {cat}
                 </span>
                </li>
                <li className='flex items-start px-4'>
                <IoMdTime />
                <span className='flex flex-col'>
                    <span className='text-green-800 font-bold'>Time</span>
                    {time < 60 ? time + 'mins' : `${parseInt((time/60))}hr ${time % 60}min`}
                 </span>
                </li>
            </ul>
        </div>
    </div>
  )
}
