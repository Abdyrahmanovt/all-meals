import React from 'react';
import {Link} from "react-router-dom";
import Logo from "./Logo/Logo";

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav">
                <Link to='/Logo'><Logo/></Link>
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/foods" className="nav-link">Foods</Link>
            </nav>
        </header>
    );
};

export default Header;