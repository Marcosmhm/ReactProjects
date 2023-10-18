import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { handleSingIn, handleSingUp } from "../utils";
import { useState } from "react";

function LoginSingup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section className="form-body">
        <div className="form-container">
          <button onClick={onClose} className="form-close-btn">&times;</button>
          <div className="form-header">
            <span className="form-title">Sign In</span>
          </div>
          <div className="form-inputs">
            <div className="input">
              <AiOutlineMail className="input-icon" />
              <input
                placeholder="Email"
                type="text"
                name=""
                id=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <RiLockPasswordLine className="input-icon" />
              <input
                placeholder="Password"
                type="password"
                name=""
                id=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-btn-container">
            <button onClick={(e) => handleSingIn(e, email, password)}>
              Login
            </button>
            <button onClick={(e) => handleSingUp(e, email, password)}>
              Sing Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginSingup;
