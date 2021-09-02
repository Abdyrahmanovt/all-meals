import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png'
const Header = () => {
    return (
        <header className='header'>
            <nav className="nav-left">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/foods" className="nav-link">Foods</Link>
                <Link to="/" className="nav-link" >Contacts</Link>
            </nav>
            <img src={logo} alt="" className='logo-header'/>
        </header>
    );
};

export default Header;