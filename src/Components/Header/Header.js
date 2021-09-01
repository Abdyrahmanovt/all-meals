import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav-left">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/foods" className="nav-link">Foods</Link>
                <Link to="/" className="nav-link" >Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;