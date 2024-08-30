import { Link } from "react-router-dom";
import Home from "../pages/home";
import Songs from "../pages/songs";
import Login from "../pages/login";
import Signup from "../pages/signup";

function Navbar() {
    return <> 
        <section className="navbar_section">
            <div className="navbar_container">
                <ul>
                    <li>
                        <Link to={Home}>Home</Link>
                    </li>
                    <li>
                        <Link to={Songs}>Songs</Link>
                    </li>
                    <li>
                        <Link to={Login}>Login</Link>
                    </li>
                    <li>
                        <Link to={Signup}>Create an Account</Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default Navbar;