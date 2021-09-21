import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to='/'>
            <h1 className='title-header'>Anywhere Fitness</h1>
            </Link>
            <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            <Link to='/instructor'>Instructor</Link>
            </div>
        </nav>
    )
}

export default Header;