import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/frontend.github.io/" className="logo">
                athena
                </Link>

                <div className="nav-links">
                    <a href="/subjects" className="nav-item">Subjects</a>
                    <a href="/creators" className="nav-item">Creators</a>
                    <a href="/pricing" className="nav-item">Pricing</a>
                    <a href="/contact" className="nav-item">Contact</a>
                    <Link to="/frontend.github.io/sign-in" className="sign-in">Sign In</Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;