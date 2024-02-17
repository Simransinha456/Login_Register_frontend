import React, { useLayoutEffect, useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        // console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }
    // always use try and catch -- because ishe code nhi fat ta hai
    const login = async () => {
        try {
            const res = await axios.post("http://localhost:8080/login", user);
            console.log(res);
            navigate('/');
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name='email' value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name='password' value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login