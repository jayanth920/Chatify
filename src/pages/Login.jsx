import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHATIFY</span>
        <span className="title">Login</span>
        <form>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Log In</button>
        </form>
        <p> Dont have an account? Sign Up!</p>
      </div>
    </div>
  );
}

export default Login;