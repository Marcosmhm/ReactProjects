import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js'
import { useState } from "react";

function SingUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return ( 
    <>
      <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </> 
  );
}

export default SingUp;