import Navbar from "./navbar";
function Header() {
    console.log("Header Component Rendered");
    return <>
        <section className="header_section">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <Navbar/>
        </section>
    </>
}

export default Header;