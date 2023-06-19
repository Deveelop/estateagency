import {useState} from 'react'
import styles from './EstateQoutes.module.css';
import {dummyQoutes} from './QouteIndex';
import SearchForm from './SearchForm';

function EstateQoutes() {
    let [index, setIndex] = useState(0);
    const post = dummyQoutes[index];

    const firstPost = () => {
      setIndex(index = 0);
    }
    const seconPost = () => {
      setIndex(index = 1);
    }
    const thirdPost = () => {
      setIndex(index = 2);
    }
  return (
    
    <div className={styles.qoutes}>

        <div className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        
     <div className={styles.slider}>
        <input type='radio' name='default' onClick={firstPost} value='first' defaultChecked/>
        <input type='radio' name='default' onClick={seconPost} value='second'/>
        <input type='radio' name='default' onClick={thirdPost} value='third'/>
      </div>
      <div className={styles.search}>
      <SearchForm/>
      </div>
    </div>

  )
}

export default EstateQoutes