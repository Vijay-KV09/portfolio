import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="header">
            <span>Vijay Kumar</span>
            <div className="components">
                <Link to="/" id="links">Home</Link>
                <Link to="/projects" id="links" >Project</Link>
                <Link to="/about" id="links">About</Link>
                <Link to="/contact" id="links">Contact</Link>
                <Link to="/resume" id="links">Resume</Link>
            </div>
        </div>
    )
}

export default Navbar;