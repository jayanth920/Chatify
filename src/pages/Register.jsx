import React from 'react'
import AddImage from "../img/addImage.png"
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHATIFY</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input style={{display:"none"}}type="file"id="file"/> 
          <label htmlFor="">
           <img src={AddImage} alt="AddImage"></img>
           <label>Add your Profile Picture</label>
          </label>
          <button>Sign up</button>
        </form>
        <p> Do you have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;