import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-tittle">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
          <input type="text" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continue, i agree to the terms of us & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
