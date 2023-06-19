import React from 'react'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    
    <ul className={styles.sidebar}>
      <li> Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>FAQ</li>
      <li> Pricing</li>
      <li>Agent</li> 
    </ul>
  )
}

export default Sidebar