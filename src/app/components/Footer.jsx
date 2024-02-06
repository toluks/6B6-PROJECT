import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <div className='flex justify-center items-start pt-10 gap-36 text-[white]'>
        <div>
            <ul>
                <h2>Categories</h2>
                <li>Yoruba</li>
                <li>Igbo</li>
                <li>Hausa</li>
                
            </ul>
            </div>

            <div>
            <ul>
                <h2>Creators</h2>
                <li>mydiasporakitchen</li>
                <li>Aliyah Recipes</li>
                <li>My Active Kitchen</li>
                <li>Chef Lola Kitchen</li>
                <li>Sisi Yemmie</li>
                <li>Afrolems</li>
              </ul>
            </div>

            <div>
            <ul>
                <h2>Favorite Recipes</h2>
                <li>Real Italian Pasta</li>
                <li>Ham and Egg Summer Salad</li>
                <li>Tasty Mozarella Buns</li>
                <li>Real American Hamburger</li>
                <li>Real Italian Lasagne from oven</li>
                <li>Huge XXL Burger</li>
                <li>French Croissant Lunch</li>
              </ul>
            </div>

            <div>
            <ul>
                <h2>Recently Added</h2>
                <li>Efo Riro</li>
                <li>Amala and Ewedu</li>
                <li>Gbegiri Soup</li>
                <li>Obe Ata Dindin</li>
                <li>Efo Egusi</li>
                <li>Efo Shoko</li>
              </ul>
            </div>

        </div>
         

         <div className='flex justify-center items-center gap-40'>
          
        <div className=''>
                <ul className=''>
                Copyright &copy;Toluks Powered by <Link href='https://vercel'>tolu</Link>
                </ul>

            </div>

            <div className=''>
                <ul className='flex justify-center items-center gap-5 text-[#433939]'>
                <li>Recipes</li>
                <li>Favorites</li>
                <li>Videos</li>
                <li>Blog</li>
                <li>About us</li>
                <li><Link href='/contact'>Contact us</Link></li>

                </ul>
            </div>

         </div>
        </section>
     </footer>

    )
}

