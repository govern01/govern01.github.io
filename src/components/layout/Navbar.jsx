import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <header id="header">
                <Link to="/" className="title">GOVE</Link>
                <nav>
                    <ul>
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
