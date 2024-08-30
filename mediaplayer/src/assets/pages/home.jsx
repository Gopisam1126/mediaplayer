import Header from "../components/header";
import Navbar from "../components/navbar";
import CreateArea from "../components/createArea";
function Home() {
    return <>
        <section className="home_section">
            <Header/>
            <Navbar/>
            <CreateArea/>
        </section>
    </>
}

export default Home;