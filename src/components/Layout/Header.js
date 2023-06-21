import {useState} from 'react'
import HomeIcon from './HomeIcon'
import More from './More'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Header(props) {
  

  return (
    <>
    <header className={styles.header}>
        <span className={styles.icon}>{props.onConfirm ? <MenuIcon  onClick={props.onMenu} /> : <CloseIcon onClick={props.onClose}/>}</span>
        
     <div className={styles.logo}>
     <span className={styles.icon1}><HomeIcon/></span>
    
        <h1>Estate<span className={styles.text}>PRO</span></h1>
     </div>
       <span className={styles.icon2}><More/></span>
    </header>
   
    </>
  )
}

export default Header