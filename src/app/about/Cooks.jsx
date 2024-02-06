import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cooks({cookName, source,cookInfo}) {
  return (
    <div className=''>
    <Image src={source} alt='creator' width={90} height={90} className={``}/>
    <div className=''>
      <h2 className=''>{cookName}</h2>
      <p className=''>{cookInfo}</p>

      <Link href={`/cooks/${cookName.split(' ').join('-').toLowerCase()}`}>
      
    <button className='bg-green-600 py-4 mt-4 text-white hover:bg-slate-950 transition-all px-3 rounded-md'>View my recipes</button>
      </Link>
    </div>

  </div>
  )
}
