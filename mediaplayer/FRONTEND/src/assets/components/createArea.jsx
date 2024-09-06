import MediaPlayer from "./mediaPlayer";
import CurrentPlaying from "./currenrPlaying";
import "../componentStyles/createArea.css";
function CreateArea() {
    return <>
        <section className="cta-section">
            <MediaPlayer/>
            <CurrentPlaying/>
        </section>
    </>
}

export default CreateArea;