import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    
    <ul className={styles.sidebar}>
      <Link to='/' className={styles.link}><li>Home</li></Link>
      <li>About Us</li>
      <li>FAQ</li>
      <li> Pricing</li>
      <Link to='/signup' className={styles.link}><li>Signup</li></Link> 
    </ul>
  )
}

export default Sidebar