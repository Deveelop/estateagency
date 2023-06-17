import React from 'react'
import HomeIcon from './HomeIcon'
import MenuIcon from './MenuIcon'
import More from './More'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <span className={styles.icon}><MenuIcon/></span>
     <div className={styles.logo}>
     <span className={styles.icon1}><HomeIcon/></span>
        <h1>Estate<span className={styles.text}>PRO</span></h1>
     </div>
        
        
       <span className={styles.icon2}><More/></span>
        
       
    </header>
  )
}

export default Header