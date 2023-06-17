import React from 'react'
import styles from './EstateQoutes.module.css';
import {dummyQoutes} from './QouteIndex';

function EstateQoutes(props) {
    let index = 0;
    const post = dummyQoutes[index];
  return (
    
    <div className={styles.qoutes}>
        <div className={styles.post}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
        <img src='/images/wallpaper.jpg'/>
    </div>

  )
}

export default EstateQoutes