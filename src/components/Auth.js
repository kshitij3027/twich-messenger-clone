import React from 'react'
import { useState,useRef } from 'react'
const Auth = () => {
    //const usernameInputRef = useRef()
    const [isLogin,setIsLogin] = useState(true)
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [error,setError] = useState(false);
    const handleSubmit = () => {
        if(password !== confirmPassword){
            setError(true);
            return;
        }
        console.log('submitted')
        setError(false);
    }
    return (
        <div className='auth-container'>
            <div className='auth-container-box'>
                <div className='auth-container-form'>
                    <input 
                     type="text"
                     id="username"
                     name="username"
                     placeholder="username"
                     onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input 
                     type="password"
                     id="password"
                     name="password"
                     placeholder="password"
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                    {!isLogin && <input 
                     type="password"
                     id="password-check"
                     name="password-check"
                     placeholder="Confirm Password"
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                    />}
                    {error && <p>Passwords do not match</p>}
                    <button className = 'standard-button' onClick={handleSubmit}>Get In</button>
                </div>
                <div className='auth-options'>
                    <button 
                    onClick={() => setIsLogin(false)}
                    style={{backgroundColor: !isLogin ? '#151a1f':'#070a0d'}}
                    >Sign Up</button>
                    <button 
                    onClick={() => setIsLogin(true)}
                    style={{backgroundColor: isLogin ? '#151a1f':'#070a0d'}}
                    >Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Auth
