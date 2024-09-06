import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./loader";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import "../componentStyles/CurrentPlaying.css"

function CurrentPlaying() {

    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getSongDetails() {
            try {
                const resp = await axios.get("http://localhost:3000/songs");
                setSongs(resp.data);
                setIsLoading(false);
            } catch (err) {
                console.log("Error getting Songs", err);
                setIsLoading(false);
            }
        }
        getSongDetails();
    }, [])

    return <>
        <section className="cp-section">
            <div className="cp-container">
                <h1>
                    Currently Playing
                </h1>
                <div className="songs-list">
                    {
                        isLoading ?(
                            <Loader/>
                        ) : (
                            <ul>
                                {songs.map(song => (
                                    <li key={song.id} className="songs" style={{
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <AudiotrackIcon/>
                                        {song.title}, {song.artist}
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </section>
    </>
}

export default CurrentPlaying;