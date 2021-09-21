import React from 'react'
import { useHistory } from 'react-router-dom'
// import StyledApp from '../styledComponents/StyledApp';
export default function Home() {
    const history = useHistory();

    const routeToSignup = () => {
        history.push('/signup');
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
        </div>
    )
}
