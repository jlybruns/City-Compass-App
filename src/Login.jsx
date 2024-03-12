import React, { useState } from 'react';
import LogoWords from './images/LogoWords.png';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
            <img src={LogoWords} width={90} height={50} />  
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="you@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value= {pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}