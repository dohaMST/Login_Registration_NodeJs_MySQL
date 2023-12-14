import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/login.scss"
import SignupValidation from "../components/SignupValidation"
import axios from "axios"

function Signup() {

    const [values, setValues] = useState({
        name : '',
        email : '',
        password : ''
    })

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleInput =(e)=>{
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setErrors(SignupValidation(values))
        if (errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res =>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

  return (
    <div className='login'>
        
        <div className='loginContainer'>
            <h2>signup</h2>
            <form action="" onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">name</label>
                    <input type="text"
                            name="name"
                            placeholder='enter name'
                            onChange={handleInput} />
                    {errors.name && <span className='text-err'>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email"
                            name="email"
                            placeholder='enter email'
                            onChange={handleInput} />
                    {errors.email && <span className='text-err'>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password"
                            name="password"
                            placeholder='enter password'
                            onChange={handleInput} />
                    {errors.password && <span className='text-err'>{errors.password}</span>}
                </div>
                <button className='loginBtn' type='submit'>signUp</button>
                <p>you agree to our terms and policies</p>
                <Link to="/" className='registerLink'>logIn</Link>
                
            </form>
        </div>
    </div>
  )
}

export default Signup