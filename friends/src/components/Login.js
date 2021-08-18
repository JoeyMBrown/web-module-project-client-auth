import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login (props) {
    let history = useHistory();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState({
        isLoading: false
    })

    function updateForm(e) {
        const newState = e.target.name === 'username' ? {...loginForm, username: e.target.value} : {...loginForm, password: e.target.value}
        setLoginForm(newState)
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoading({isLoading: true});
        axios.post('http://localhost:5000/api/login', loginForm)
            .then((res) => {
                //console.log(res);
                setIsLoading({isLoading: false});
                localStorage.setItem('token', res.data.payload)
                history.push('/friends')
            })
    }
    return (
        <div>
            {isLoading.isLoading ? <div>Loading data...</div> : 
            <form className='login-form'>
                <input className='username-input' name='username' type='text' placeholder='Username' value={loginForm.username} onChange={updateForm} />
                <input className='password-input' name='password' type='text' placeholder='Password' value={loginForm.password} onChange={updateForm} />
                <button className='submit' type='submit' onClick={submitHandler}>submit</button>
            </form>
            }
        </div>

    )
}

export default Login;