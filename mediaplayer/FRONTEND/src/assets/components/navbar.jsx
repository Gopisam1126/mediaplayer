/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import "../pageStyles/navbar.css";
import { useState } from "react";

function Navbar() {

    const [isLoggedin, setIsLoggedin] = useState(false);

    return <> 
        <section className="navbar_section">
            <div className="navbar_container">
                <ul className="nav_ul">
                    <li className="nav_li nav_li1">
                        <Link to="/" className="nav_link">
                            <HomeIcon className="nav-icon"/>
                            Home
                        </Link>
                    </li>
                    <li className="nav_li nav_li2">
                        <Link to="/songs" className="nav_link">
                            <MusicNoteIcon className="nav-icon"/>
                            Songs
                        </Link>
                    </li>
                    <li className="nav_li nav_li3">
                        <Link to="/login" className="nav_link">
                        {
                            isLoggedin ? <div className="icon-name">
                            <LoginIcon className="nav-icon"/>
                            Login
                        </div> : <div className="icon-name">
                            <PersonIcon className="nav-icon"/>
                            Create an Account
                        </div>
                        }
                        </Link>
                    </li>
                    <li className="nav_li nav_li4">
                        <Link to="/signup" className="nav_link">
                        </Link>
                    </li>
                    <li className="nav_li nav_li5">
                        <Link to="/upload" className="nav_link">
                            <AddIcon className="nav-icon"/>
                            Add a song
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default Navbar;