import React from 'react'
import styles from './SearchForm.module.css'
import Card from '../UI/Card'
function SearchForm() {
  return (
    <Card>
      <form  className={styles.form}>
        <label className={styles.label}>Search for properties:</label>
        <div className={styles.properties}>
          <label>Property status</label>
          <select>
            <option>Any</option>
            <option>Rent</option>
            <option>Sale</option>
          </select>
        </div>
        <div className={styles.properties}>
        <label>Property type</label>
        <select>
            <option>Any</option>
            <option>Building</option>
            <option>Office</option>
          </select>
        </div>
        <div className={styles.mores}>
          <label>Location</label>
          <input type='text'/>
        </div>

        <div id='conditional'>
        <div className={styles.mores}>
          <label>Price</label>
          <input />
        </div>
        <div className={styles.mores}>
          <label>Bedroom</label>
          <input />
        </div>
        </div>
        
        <button>More</button>
        <button>Search</button>
        
      </form>
      </Card>
     
  )
}

export default SearchForm