import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="/" className="logo">
                athena
                </a>

                <div className="nav-links">
                    <a href="/subjects" className="nav-item">Subjects</a>
                    <a href="/creators" className="nav-item">Creators</a>
                    <a href="/pricing" className="nav-item">Pricing</a>
                    <a href="/contact" className="nav-item">Contact</a>
                    <button className="sign-in">Sign In</button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

