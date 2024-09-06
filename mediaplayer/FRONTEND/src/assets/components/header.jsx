import Navbar from "./navbar";
import "../pageStyles/logo.css";
import "../componentStyles/header.css"
import "../componentStyles/common.css"
function Header() {
    return <>
        <section className="header_section">
            <div className="logo-nav">
                <div className="logo-container">
                    <img src="\images\logo-no-background.png" alt="logo" className="logo" />
                </div>
                {/* <div className="brand-name">
                    <h1 className="brand">MUSIC PLAYER</h1>
                </div> */}
                <Navbar/>
            </div>
        </section>
    </>
}

export default Header;