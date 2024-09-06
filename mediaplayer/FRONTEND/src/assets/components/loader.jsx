import "../componentStyles/loader.css"

function Loader() {
    return <>
        <section className="loader-section">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </section>
    </>
}

export  default Loader;