import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const {isLoggedIn} = props;
    return (
        <nav>
            <Link to='/'>
            <h1 className='title-header'>Anywhere Fitness</h1>
            </Link>
            <div className='nav-links'>
            {!isLoggedIn && <Link to='/login'>Login</Link>}
            {isLoggedIn && <Link to='/logout'>Logout</Link>}
            </div>
        </nav>
    )
}

export default Header;