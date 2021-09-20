import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useHistory } from "react-router";

import StyledSignup from "../styledComponents/StyledSignup";

const initialState = {
    name: '',
    email: '',
    password: ''
}

const Signup = () => {
    const [ credentials, setCredentials ] = useState(initialState);
    const [isInstructor, setInstructor] = useState(2);
    const { push } = useHistory();

    const handleChange = (e) => {
        if( e.target.type !== 'checkbox' ){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })} 
        else if (e.target.type === 'checkbox'){
            console.log(e.target.value)
            e.target.checked === true ? setInstructor(1) : setInstructor(2)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakeapi.com/api/', credentials)
            .then(res => {
                push('/login');
            })
            .catch(err => alert(err))
    }

	return (
		<StyledSignup>
            <div className='content-div'>
                <div className='form-div'>
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='input-div'>
                            <span>Name</span>
                            <input type='text' name='name' id='name' onChange={handleChange} value={credentials.name}/>
                        </div>
                        <div className='input-div'>
                            <span>Email</span>
                            <input type='email' name='email' id='email' onChange={handleChange} value={credentials.email}/>
                        </div>
                        
                        <div className='input-div'>
                            <span>Password</span>
                            <input type='password' name='password' id='password' onChange={handleChange} value={credentials.password}/>
                        </div>
                        <div className='remember'>
                            <label><input onChange={handleChange} type='checkbox' name='instructor' value={isInstructor} /> Instructor? </label>
                        </div>
                        <div className='input-div'>
                            <button className='button'>Sign up</button>
                        </div>
                        <div className='input-div'>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='img-div'>
                <img src='' alt='alt text'/>
            </div>
		</StyledSignup>
	)
}

export default Signup;