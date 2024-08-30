import { Link } from "react-router-dom";
import "../pageStyles/navbar.css";

function Navbar() {
    return <> 
        <section className="navbar_section">
            <div className="navbar_container">
                <ul className="nav_ul">
                    <li className="nav_li nav_li1">
                        <Link to="/" className="nav_link">Home</Link>
                    </li>
                    <li className="nav_li nav_li2">
                        <Link to="/songs" className="nav_link">Songs</Link>
                    </li>
                    <li className="nav_li nav_li3">
                        <Link to="/login" className="nav_link">Login</Link>
                    </li>
                    <li className="nav_li nav_li4">
                        <Link to="/signup" className="nav_link">Create an Account</Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default Navbar;