import React, { useState } from 'react'
import axios from 'axios'
import "./register.css"
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        // console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {    // tino request true hone ke baad post request jayega
            // alert("posted")
            axios.post("http://localhost:8080/register", user)
                .then(res => alert(res.data.message))
                .catch(error => console.error("Axios Error:", error));

        }
        else {
            alert("Invalid input")
        }
    }

    return (
        <div className='main'>
            <div className='main1'>
                <div className="register">
                    {console.log("User", user)}
                    <h1>Register</h1>
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                    <div className="button" onClick={register} >Register</div>
                    <div>or</div>
                    <div className="button" onClick={() => navigate('/login')}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Register 