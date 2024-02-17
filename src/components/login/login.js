import React, {useLayoutEffect, useState} from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [user, setUser]= useState({
        email: "",
        password: "" 
    })

    const handleChange = e =>{
        const { name, value} = e.target
        // console.log(name, value)
        setUser({
            ...user,
            [name]: value
        }) 
    } 
    const login =() =>{
        axios.post("http://localhost:8080/login", user)
        .then(res => navigate('/'))
        .catch(error => console.error("Axios Error:", error));
    }

  return (
    <div className="login">
        {console.log(user)}
    <h1>Login</h1>
    <input type="text" name='email' value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name='password' value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
    <div className="button" onClick={login}>Login</div>
    <div>or</div>
    <div className="button" onClick={()=> navigate('/register')}>Register</div>
    </div>
  )
}

export default Login