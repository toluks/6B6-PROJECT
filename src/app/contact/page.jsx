import { GoArrowUp } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
import React from 'react'
import styles from './contact.module.css'
import Image from "next/image";

export default function page() {
  return (
<section>
  <section>
    <div className={styles.back}>
      <div className='flex flex-col items-center justify-center h-[70vh]'>
        <h1 className='text-5xl font-bold text-black'>Contact Us</h1>
        <h2 className='text-2xl font-semi-bold text-black'>Suggestions? Questions? Contact us below.</h2>
        {/* <Image src={`/images/istockphoto-1jpeg.jpg`} width={800} height={100}> */}
        {/* </Image> */}
       
      
      </div>
      
    </div>

    

      <section className={`grid md:grid-cols-3 grid-cols-1 py-20 text-center gap-4 w-3/4 m-auto`}>
    <div className=''>
      <h2 className=" text-green-500">Summary?</h2>
      <p className="">Do you have any Suggestions on how we can improve the blog recipe?</p>
      <button className=" bg-green-600 my-6 p-4 rounded-lg text-white">Send a Suggestion</button>
      </div>
      
   

     <div className=''>
      <h2 className=" text-green-500">Question?</h2>
      <p>Do you have any unanswered question about my recipe?</p>
      <p className=" bg-green-600 my-6 p-4 rounded-lg w-1/2 m-auto text-white">Send a Mail</p>
     </div>

     <div className="">
     <h2 className="text-green-500">Follow Us</h2>
     <p>To stay updated, follow us on our social media handles</p>
     <p className="flex my-6 space-x-4 w-1/2 m-auto ">
      <span className=""><Link href='https://web.facebook.com/?_rdc=1&_rdr'><FaSquareFacebook className="bg-white text-green-500 text-4xl" /></Link></span>
      <span className=""><Link href='https://web.whatsapp.com'><FaWhatsapp className="bg-white text-green-500 text-4xl"/></Link></span>
     </p>

     </div>
     </section>
   </section>

   <div className='flex flex-row-reverse px-5'>
   <Link href='#top'>
   <div className={styles.front}>
    <span><GoArrowUp /></span>
    <button>Back To Top</button>

   </div>
   </Link>
   </div>

  </section>


  )
}
