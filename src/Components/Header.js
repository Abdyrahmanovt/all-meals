import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/foods" className="nav-link">Foods</Link>
            </nav>
        </header>
    );
};

export default Header;