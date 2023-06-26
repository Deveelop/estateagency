
import {useState} from 'react';
import styles from './Signup.module.css'

function Signup() {
    
    const sendRequest =  async  (text) => { 
        try{
    const response = await fetch('https://houserentmanagementsystem-production.up.railway.app/api/user/register.json', {
            method: 'POST',
            body: text,
        })
        if(!response.ok) {
            throw new Error('Request Failed')
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
    }
  return (
    <>
    <button onClick={sendRequest}> SignUp</button>
    
    <form>
        <div className={styles.form}>
            <div className={styles.headings}>
        <h1>SIGNUP FORM</h1>
        <h4>Kindly Sign Up</h4>
        </div>
        <div className={styles.firstlabel}><label>Name</label></div>
        <div className={styles.names}>  
            <div >
            <input />
            <label>First Name</label>
            </div>
            
           <div className={styles.inputs}>
            <input />
            <label>Last Name</label>
            </div>
        </div>
        <div className={styles.firstlabel}>
            <label>E-mail</label>
            <input />
        </div>
        <div className={styles.firstlabel}>
            <label>Username</label>
            <input />
        </div>
        <div className={styles.firstlabel}>
            <label>Phone number</label>
            <input />
        </div>
        <div className={styles.firstlabel}>
            <label>Password</label>
            <input />
        </div>
        <div className={styles.firstlabel}>
            <label>Confirm password</label>
            <input />
        </div>
        <div className={styles.firstlabel}c>
            <label>SignUp Type</label>
        <select>
            <option>House Owner</option>
            <option>House Agent</option>
            <option>Tenant</option>
        </select>
        </div>
        <button>Signup</button>
        </div>
    </form>
    </>
  )
}

export default Signup;