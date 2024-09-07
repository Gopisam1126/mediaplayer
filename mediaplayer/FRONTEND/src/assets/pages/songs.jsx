import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Loader from "../components/loader";
import "../pageStyles/songs.css"

function Songs() {

    const [songs, setSongs] = useState([]);
    const [isFav, setIsFav] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    function handleFav(songId) {
        if (isFav.includes(songId)) {
            setIsFav(isFav.filter(id => id !== songId));
        } else {
            setIsFav([...isFav, songId]);
        }
    }

    useEffect(() => {
        async function fetchSongs() {
            try {
                const response = await axios.get("http://localhost:3000/songs");
                setSongs(response.data); 
                setIsLoading(false);
            } catch (err) {
                console.log("Error fetching data: ", err);
            }
        }
        fetchSongs();
    }, [])

    return <>
        <Header/>
        <section className="songs_section">
            <div className="songs_container">
                {
                    isLoading ? <div className="loader-container">
                            <Loader className="song-c-loader"/> 
                        </div>: (
                        <ul className="spngs-ul">
                            {songs.map(song => (
                                <li key={song.id} className="lib-list-songs">
                                    {song.title}, {song.artist}
                                    <div className="func-icons" style={{
                                        position: "relative",
                                    }}>
                                        <AddCircleOutlineRoundedIcon style={{
                                            cursor: "pointer",
                                            marginLeft: "2vw"
                                        }}/>
                                        <div className="fav-icon-container" onClick={() => handleFav(song.id)}>
                                            {
                                                isFav.includes(song.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>
                                            }
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </section>
    </>
}

export default Songs;