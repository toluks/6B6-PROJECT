import React from 'react'
import styles from './cook.module.css'
import Image from 'next/image'

export default function CookHeader({source, info, img, fullInfo}) {
  return (
    <div className={styles.header}>
        <Image src={`/${img}.png`} alt={source} width={100} height={100}/>
        <h1>{source}</h1>
        <p>{info}</p>
    </div>
  )
}
