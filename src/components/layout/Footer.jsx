import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer id="footer" className="wrapper alt">
                <div className="inner">
                    <div className="sitemap">
                        <h4>Sitemap</h4>
                        <ul>
                            <li><Link to="/">Index</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/easter'>Something Special</Link></li>
                        </ul>
                    </div>
                    <ul className="menu">
                        <li>&copy; Jacob Morris. TODO add License.</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a>, lovingly edited by me =3</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;
