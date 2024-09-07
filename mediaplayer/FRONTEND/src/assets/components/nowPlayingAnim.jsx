import "../componentStyles/nowPlayingAnim.css"
function NowPlayingAnim() {
    return <>
        <section className="np-anim-section">
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
        </section>
    </>
}

export default NowPlayingAnim;