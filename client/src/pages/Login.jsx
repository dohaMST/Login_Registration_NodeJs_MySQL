import React, { useState } from 'react'
import "../styles/login.scss"
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../components/LoginValidation'
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
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
        setErrors(Validation(values))
        if (errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res =>{
                console.log(res)
                if(res.data === "success"){
                    navigate('/home')
                } else{
                    alert("no records")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

  return (
    <div className='login'>
        
        <div className='loginContainer'>
            <h2>login</h2>
            <form action="" onSubmit={handleSubmit}>
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
                <button className='loginBtn' type='submit'>logIn</button>
                <p>you agree to our terms and policies</p>
                <Link to="/signup" className='registerLink' >create account</Link>
                {/* <button className='registerBtn'>create account</button> */}
            </form>
        </div>
    </div>
  )
}

export default Login