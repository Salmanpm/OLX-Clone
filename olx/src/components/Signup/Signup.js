import React, { useState,useContext } from 'react'
import './Signup.css'
import { FirebaseContext } from '../../store/FirebaseContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'; 

// import { db } from '../../firebase/config';
// import { collection ,  addDoc } from 'firebase/firestore';

// import { useHistory } from 'react-router-dom';



function Signup() {

  
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  // const history = useHistory();
  


  const {firebase} = useContext(FirebaseContext)
  
  const handleSubmit =(e)=>{
    
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  // .then(()=>{ 
  //   history.push("/login");
  // })
  //  const collectionRef = db.collection('users');

  //  collectionRef.add({
    // username:'sal'
   
    
  


    // try {
    //   const docRef =  addDoc(collection(db, "users"), {
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    //   });
    
    //   console.log("Document written with ID: ", docRef.id); 
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }


  

  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // })

  

}
  
   
  
  

  
  
  // .then(()=>{
  //   firebase.collection('users').add({
  //     // id:result.user.uid,
  //     username:username,
  //     phone:phone
  //   })
  // })

 
    // firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    //  result.user.updateProfile({displayName:username}) 
    // })
  
  return (
    <div>
    <div className="signupParentDiv">
      <img width="200px" height="200px" src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"></img>
      <form  onSubmit={handleSubmit} >
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          id="fname"
          name="name"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          id="fname"
          name="email"
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          id="lname"
          name="phone"
          defaultValue="Doe"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          id="lname"
          name="password"
          defaultValue="Doe"
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      
      <a>Login</a>
    </div>
  </div>
  )
  }

 
export default Signup
