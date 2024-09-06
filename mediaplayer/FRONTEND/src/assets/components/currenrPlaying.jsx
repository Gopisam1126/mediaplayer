import axios from "axios";
import { useEffect, useState } from "react";
import "../componentStyles/CurrentPlaying.css"

function CurrentPlaying() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        async function getSongDetails() {
            try {
                const resp = await axios.get("http://localhost:3000/songs");
                setSongs(resp.data);
            } catch (err) {
                console.log("Error getting Songs", err);
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
                    <ul>
                        {songs.map(song => (
                            <li key={song.id} className="songs">
                                {song.title}, {song.artist}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </>
}

export default CurrentPlaying;