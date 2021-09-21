import React from 'react'
import { useHistory } from 'react-router-dom'
// import StyledApp from '../styledComponents/StyledApp';
export default function Home() {
    const history = useHistory();

    const routeToSignup = () => {
        history.push('/signup');
    }

    const routeToLogin = () =>{
        history.push('/login');
    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='fitness.jpg'
                alt='Blurry fitness'
            />
            <button id='signup-btn'
                onClick={routeToSignup}
                className='md-button signup-button'
            >
                Signup!
            </button>
            <button id='login-btn'
                onClick={routeToLogin}
                className='md-button login-button'
            >
                Login!
            </button>
        </div>
    )
}
