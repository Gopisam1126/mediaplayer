import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loader from "./loader";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import NowPlayingAnim from "./nowPlayingAnim";
import "../componentStyles/CurrentPlaying.css"

function CurrentPlaying({setSongId, currentSongId}) {

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
    }, []);

    function handleSongClick(songId) {
        setSongId(songId)
    }

    return <>
        <section className="cp-section">
            <div className="cp-container">
                <h1 className="cp-head-anim">
                    Currently Playing
                    {/* <NowPlayingAnim/> */}
                </h1>
                <div className="songs-list">
                    {
                        isLoading ?(
                            <Loader/>
                        ) : (
                            <ul>
                                {songs.map(song => (
                                    <li
                                        key={song.id}
                                        className={`songs ${currentSongId === song.id ? 'playing-song' : ''}`}
                                        onClick={() => handleSongClick(song.id)}
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            transition: "0.2s all linear"
                                        }}
                                    >
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

CurrentPlaying.propTypes = {
    setSongId: PropTypes.func.isRequired,
    currentSongId: PropTypes.number.isRequired
};

export default CurrentPlaying;