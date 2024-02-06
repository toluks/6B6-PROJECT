import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiSpeakFill } from "react-icons/ri";
import { BiSolidMessageRounded } from "react-icons/bi";
import { GrContact } from "react-icons/gr";



import styles from './navbar.module.css'

import { Dancing_Script } from 'next/font/google'
import Link from "next/link";

const italian = Dancing_Script({ subsets: ['latin'] })






export default function Navbar() {
  return (
    <nav className={styles.nav} id="top">
        <ul>
            <li className="flex flex-col">
            
            <span>Toluks</span>
            <span className={italian.className}>African Recipes</span>
            </li>
        </ul>
        <ul>
           <Link href='/'>
            <li>
                <FaHome/>
                <span>Home</span>
            </li>
           </Link>
           
           <Link href='/recipes'>
            <li>
                <ImSpoonKnife/>
                <span>Recipes</span>
            </li>
           </Link>

           <Link href='/favourite'>
            <li>
                <MdFavorite/>
                <span>Favourite</span>
            </li>
            </Link>
            
            <Link href='/withvideos'>
            <li>
                <AiOutlineYoutube/>
                <span>Video Recipes</span>
            </li>
            </Link>

            <Link href='/Blog'>
            <li>
                <RiSpeakFill/>
                <span>Blog</span>
            </li>
            </Link>

            <Link href='/about'>
            <li>
                <BiSolidMessageRounded/>
                <span>About Us</span>
            </li>
            </Link>

            <Link href='/contact'>
            <li>
                <GrContact/>
                <span>Contact Us</span>
            </li>
            </Link>

        </ul>


        

        
    </nav>
  )
}
