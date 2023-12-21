import React from 'react'
import './Login.css'
import { useState } from 'react'
import { auth } from '../../firebase/config'; 
import {signInWithEmailAndPassword} from 'firebase/auth'
// import { useHistory } from 'react-router-dom';
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

//  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    
  })
  // .then(()=>{
  //   history.push('/')
  // })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  
  return (
    <div>
    <div className="loginParentDiv">
      <img width="200px" height="200px" src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"></img>
      <form onSubmit={handleLogin}>
        <label htmlFor="fname">Email</label>
        <br />
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          className="input"
          type="email"
          id="fname"
          name="email"
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          className="input"
          type="password"
          id="lname"
          name="password"
          defaultValue="Doe"
        />
        <br />
        <br />
        <button>Login</button>
      </form>
      <a>Signup</a>
    </div>
  </div>
  )
}

export default Login
