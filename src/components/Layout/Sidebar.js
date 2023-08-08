import {useContext} from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import purposeContext from '../store/purpose-context'
function Sidebar() {
  const ctx = useContext(purposeContext)
  return (
    
    
      <ul className='fixed w-[25%] h-screen bg-[#010229] top-0 -left-8 flex flex-col text-center z-10 p-12 '>
        <Link to='/' onClick={ctx.navCloseFunc} className={styles.link}><li>Home</li></Link>
        <Link to='/about'  onClick={ctx.navCloseFunc}  className={styles.link}><li>About us</li></Link> 
        <Link to='/faq'  onClick={ctx.navCloseFunc} className={styles.link}><li>FAQs</li></Link>
        <Link to='/categories'  onClick={ctx.navCloseFunc} className={styles.link}><li>Categories</li></Link>
      </ul>
    
  )
}

export default Sidebar