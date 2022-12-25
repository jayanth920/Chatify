import React from 'react'
import styled from 'styled-components'
import { Link } from'react-router-dom'


function RegisterPage() {

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("form")
  }

      return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="brand">
          <img src="./assets/logo.png" alt="Logo" />
          <h1>Chatify</h1>
        </div>
        <input 
        type="text" 
        palceholder="UserName" 
        name="username"
        onChange={(e)=>handleSubmit(e)}/>

        <input 
        type="text" 
        palceholder="UserName" 
        name="username"
        onChange={(e)=>handleSubmit(e)}/>

        <input 
        type="email" 
        palceholder="Email" 
        name="email" 
        onChange={(e)=>handleSubmit(e)}/>

        <input 
        type="password" 
        palceholder="Password" 
        name="password"
        onChange={(e)=>handleSubmit(e)}/>

        <input 
        type="password" 
        palceholder="Confirm Password" 
        name="confirmPassword"
        onChange={(e)=>handleSubmit(e)}/>
        <button type="submit">Create User</button>
        <span>Already have an account ?<Link to="/login">Login</Link></span>
    </form>
    </>
  )
}

export default RegisterPage