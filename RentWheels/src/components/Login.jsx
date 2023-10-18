import { useState } from "react";
import { handleSingIn, logInWithGoogle } from "../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return ( 
    <>
      <div className="form-container">
      <button onClick={logInWithGoogle}></button>
      <form onSubmit={(e) => handleSingIn(e, email, password)}>
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

export default Login;