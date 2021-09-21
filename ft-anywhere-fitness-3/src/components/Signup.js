import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
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
        console.log("New User:", credentials)

        // axios.post('https://fakeapi.com/api/', credentials)
        //     .then(res => {
        //         push('/login');
        //     })
        //     .catch(err => alert(err))
    }

	return (
		<StyledSignup>
            <div className='container'>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>

                    <div className='input-div'>
                        <label>
                            Name
                        <input type='text' name='name' id='name' onChange={handleChange} value={credentials.name}/>
                        </label>
                    </div>
                    <div className='input-div'>
                        <label>
                            Email
                        <input type='email' name='email' id='email' onChange={handleChange} value={credentials.email}/>
                        </label>
                    </div>
                    <div className='input-div'>
                        <label>
                            Password
                        <input type='password' name='password' id='password' onChange={handleChange} value={credentials.password}/>
                        </label>
                    </div>
                    <div>
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
		</StyledSignup>
	)
}

export default Signup;