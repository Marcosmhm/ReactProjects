import { useState } from "react";
import { handleSubmit } from "../utils";

function SingUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return ( 
    <>
      <div className="sign-up-container">
      <form onSubmit={(e) => handleSubmit(e, email, password)}>
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