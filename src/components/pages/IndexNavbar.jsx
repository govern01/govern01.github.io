import { Link } from 'react-router-dom';

function IndexNavbar() {
    return (
        <div className="indexNavbarWrapper">
            <div className="indexNavbar">
                <div className="about">
                    <h1>Welcome to my Website!</h1>
                    <h2>~~My name is Jacob Morris, aka Govern01</h2>
                    <p>work you fuck</p>
                </div>
                <div className="links">
                    {/* Add in links and buttons n shit */}
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IndexNavbar;
