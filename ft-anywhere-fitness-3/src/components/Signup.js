import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
import * as Yup from 'yup';

import StyledSignup from "../styledComponents/StyledSignup";

const initialState = {
    user_name: '',
    user_email: '',
    user_username: '',
    user_password: '',
    user_role: 2
}

const Signup = () => {
    const [credentials, setCredentials] = useState(initialState);
    const [isInstructor, setInstructor] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        user_username: '',
        user_password: '',
    });
    const { push } = useHistory();

    const formSchema = Yup.object().shape({
    user_name: Yup
    .string()
    .trim()
    .required("A name is required"),
    user_email: Yup
    .string()
    .email("This must be a valid email")
    .trim()
    .required("An email address is required"),
    user_username: Yup
    .string()
    .trim()
    .required("A username is required")
    .min(3, "Username must include between 3-30 characters")
    .max(30,"Username must include between 3-30 characters"),
    user_password: Yup
    .string()
    .trim()
    .required("A password is required")
    .min(6, "Password must include between 6-30 characters")
    .max(30,"Password must include between 6-30 characters"),
    user_role: Yup
    .number()
    })

    useEffect( () => {
        formSchema.isValid(credentials).then((valid) => {
            setButtonDisabled(!valid);
        })
    }, [credentials])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(credentials)
        if(isInstructor){
        // console.log("Instructor: ",{...credentials, user_role: 1})
            axios.post('https://ft-anywhere-fitness-3.herokuapp.com/api/auth/register', {...credentials, user_role: 1})
            .then(res => {
                console.log(res)
                localStorage.setItem("message", res.data.message)
                push('/instructor/welcome');
            })
            .catch(err => alert(err))
        } else if (!isInstructor){
            credentials.user_role = 2
            // console.log("Client: ",credentials)
            axios.post('https://ft-anywhere-fitness-3.herokuapp.com/api/auth/register', credentials)
            .then(res => {
                console.log(res)
                push('/client/welcome');
            })
            .catch(err => alert(err))
        }
        
    }

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target


        if(type === 'checkbox'){
            checked === true ? setInstructor(true) : setInstructor(false);
        }
        Yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors, [name]: ''
            })
        })
        .catch(err => {
            setErrors({
                ...errors, [name]: err.errors[0]
            })
        })

        setCredentials({
            ...credentials, [name]: value
        })
    }

    return (
        <StyledSignup>
            <div className='container'>
                <div className='row'>
                {errors.user_name.length > 0 && <p className='errorMsg'>{errors.user_name}</p>}
                {errors.user_email.length > 0 && <p className='errorMsg'>{errors.user_email}</p>}
                {errors.user_username.length > 0 && <p className='errorMsg'>{errors.user_username}</p>}
                {errors.user_password.length > 0 && <p className='errorMsg'>{errors.user_password}</p>}
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>

                        <div className='col'>
                            <div className='input-div'>
                                <label>
                                    Name
                                    <input type='text' name='user_name' id='user_name' onChange={handleChange} value={credentials.user_name} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Email
                                    <input type='user_email' name='user_email' id='user_email' onChange={handleChange} value={credentials.user_email} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Username
                                    <input type='text' name='user_username' id='user_username' onChange={handleChange} value={credentials.user_username} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Password
                                    <input type='password' name='user_password' id='user_password' onChange={handleChange} value={credentials.user_password} />
                                </label>
                            </div>
                            <div className='checkbox-div'>
                                <label>Instructor?<input onChange={handleChange} type='checkbox' name='user_role' value={credentials.user_role} /></label>
                            </div>
                            <div className='signup-div'>
                                <button disabled={buttonDisabled} className='md-button'>Sign up</button>
                            </div>

                            <div className='input-div'>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledSignup>
    )
}

export default Signup;