import {useContext} from 'react';
import MenuIcon from './MenuIcon';
import More from './More';
import purposeContext from '../store/purpose-context';
import HomeIcon from './HomeIcon';
import styles from './Header.module.css'
const Header = () => {
  const ctx = useContext(purposeContext)
  return (
    <header className=' fixed z-10 top-0 left-0 w-full h-20 bg-[--col] text-white flex justify-between items-center px-[10%] '>
    <span onClick={ctx.navFuction} ><MenuIcon/></span>
    
 <div className={styles.logo}>


    <h1>House<span className={styles.text}>Fair</span></h1>
 </div>
   <span className={styles.icon2}><More/></span>
   
</header>
  )
}

export default Header;