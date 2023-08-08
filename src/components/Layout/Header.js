import {useContext} from 'react';
import MenuIcon from './MenuIcon';
import More from './More';
import purposeContext from '../store/purpose-context';
import HomeIcon from './HomeIcon';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const ctx = useContext(purposeContext)
  return (
    <header className=' fixed z-10 top-0 left-0 w-full h-20 bg-[--col] text-white flex justify-between items-center px-[10%] '>
    <span onClick={ctx.navFuction} ><MenuIcon/></span>
    
 <div className={styles.logo}>


    <h1>House<span className={styles.text}>Fair</span></h1>
 </div>
  <ul className='flex gap-10'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About us</Link></li>
    <li><Link to='/categories'>Categories</Link></li>
    <li>FAQ</li>
  </ul>
   
</header>
  )
}

export default Header;