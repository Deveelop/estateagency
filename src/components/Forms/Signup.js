
import {useState,useRef} from 'react';
import styles from './Signup.module.css'

function Signup() {
    const firstNameInput = useRef();
    const lastNameInput = useRef();
   
    const emailInput = useRef();
    const phoneInput = useRef();
    const passwordInput = useRef();
    const usernameInput = useRef();
    const confirmPasswordInput = useRef();
   const signupType = useRef()

    const sendRequest =  async  (text) => { 
        try{
    const response = await fetch('https://houserentmanagementsystem-production.up.railway.app/api/user/register', {
            method: 'POST',
            body: JSON.stringify(text),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if(!response.ok) {
            throw new Error('Request Failed')
            
        }
        const data = await response.json();
        console.log(data);
        
    } catch (err) {
        console.log(err)
        console.log(text)
    }
    }
    const submitHandler = (event) => {
  event.preventDefault();
   
  const userDetails ={
    first_name: firstNameInput.current.value,
    last_name: lastNameInput.current.value,
  
    email: emailInput.current.value,
    username: usernameInput.current.value,
    phone_number: phoneInput.current.value,
    password: passwordInput.current.value,
    confirm_password: confirmPasswordInput.current.value,
    signuptype: signupType.current.value
  }
    sendRequest(userDetails);
    console.log('this is sent', userDetails)
    }
  return (
    <>
    
    
    <form onSubmit={submitHandler}>
        <div className={styles.form}>
            <div className={styles.headings}>
        <h1>SIGNUP FORM</h1>
        <h4>Kindly Sign Up</h4>
        </div>
        <div className={styles.firstlabel}><label>Name</label></div>
        <div className={styles.names}>  
            <div >
            <input type='text' ref={firstNameInput} />
            <label>First Name</label>
            </div>
           
            
           <div className={styles.inputs}>
            <input type='text' ref={lastNameInput} />
            <label>Last Name</label>
            </div>
        </div>
        <div className={styles.firstlabel}>
            <label>E-mail</label>
            <input type='email' ref={emailInput}/>
        </div>
        <div className={styles.firstlabel}>
            <label>Username</label>
            <input type='text' ref={ usernameInput}/>
        </div>
        <div className={styles.firstlabel}>
            <label>Phone number</label>
            <input type='number' ref={phoneInput}/>
        </div>
        <div className={styles.firstlabel}>
            <label>Password</label>
            <input type='text' ref={passwordInput}/>
        </div>
        <div className={styles.firstlabel}>
            <label>Confirm password</label>
            <input type='text' ref={confirmPasswordInput} />
        </div>
        <div className={styles.firstlabel}c>
            <label>SignUp Type</label>
        <select typeof='text' ref={signupType}>
            <option>House Owner</option>
            <option>Tenant</option>
        </select>
        </div>
        <button >Signup</button>
        </div>
    </form>
    
    </>
  )
}

export default Signup;