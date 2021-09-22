import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

    return (
        <nav>
            <Link to='/'>
            <h1 className='title-header'>Anywhere Fitness</h1>
            </Link>
            <div className='nav-links'>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
            </div>
        </nav>
    )
}

export default Header;