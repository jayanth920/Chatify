import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1 className="mint">CHATIFY</h1>
        <span className="title">LOGIN</span>
        <form onSubmit={handleSubmit}>
          <input className="email" type="email" placeholder="Email" />
          <input className="Password" type="password" placeholder="Password" />
          <button className="login">Log In</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        <marquee className="marquee"> <span>------CHATIFY®</span>&nbsp;&nbsp;&nbsp;<span>by</span>&nbsp;&nbsp;&nbsp;<span>Jay------</span></marquee>
        {err && <span className="error">🚫 Something went wrong here, please try again!</span>}
      </div>
    </div>
  );
};

export default Login;
