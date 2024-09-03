import axios from "axios";
import { useEffect, useState } from "react";

function Songs() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        async function fetchSongs() {
            try {
                const response = await axios.get("http://localhost:3000/songs");
                setSongs(response.data); 
            } catch (err) {
                console.log("Error fetching data: ", err);
            }
        }
        fetchSongs();
    }, [])

    return <>
        <section className="songs_section">
            <div className="songs_container">
                <h1>Songs</h1>
                <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.title} by {song.artist}
                    </li>
                ))}
            </ul>
            </div>
        </section>
    </>
}

export default Songs;