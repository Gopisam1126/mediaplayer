import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../componentStyles/mediaPlayer.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';

function MediaPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [songFile, setSongFile] = useState(null); // Use null initially
    const [songId, setSongId] = useState(1)
    const [songTitle, setSongTitle] = useState();
    const [songArtist, setSongArtist] = useState();
    const audioRef = useRef(null);

    useEffect(() => {
        async function getSong() {
            try {
                const songData = await axios.get(`http://localhost:3000/songs/play/${songId}`);
                const { title, artist, file } = songData.data;
                const audioBlob = new Blob([new Uint8Array(atob(file).split("").map(char => char.charCodeAt(0)))], { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setSongFile(audioUrl);
                setSongTitle(title);
                setSongArtist(artist);
            } catch (err) {
                console.log("Error getting song details", err);     
            }
        }
        getSong();
    }, [songId]);

    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
    }

    function handleDuration() {
        setDuration(audioRef.current.duration);
    }

    function getProgress() {
        const progress = (currentTime / duration) * 100;
        return progress;
    }
    function handleNext() {
        setSongId(prevId => prevId + 1);
        setIsPlaying(false);
    }

    function handlePrev() {
        setSongId(prevId => prevId > 1 ? prevId - 1 : 1);
        setIsPlaying(false);
    }

    function formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    function handlePlay() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <section className="mp-section">
            <div className="music-player-container">    
                <audio
                    ref={audioRef}
                    src={songFile}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedData={handleDuration}
                />
                <div className="play-list">
                    <p className="pl-title">
                        Your Songs
                    </p>
                </div>
                <div className="mp-container">
                    <img src="/images/thumbnail_rough.jpg" alt="thumbnail" className="media-tn" />
                </div>
                <div className="st-container">
                    <p className="song-title">
                        {songTitle}, {songArtist}
                    </p>
                </div>
                <div className="timer-container">
                    <p className="timer">
                        {formatTime(currentTime)}
                    </p>
                </div>
                <div className="progres-container">
                    <div className="progres">
                        {/* <div
                            className="cr-pr"
                            style={{
                                width: `${getProgress()}%`,
                                backgroundColor: '#F7EED3',
                                height: '0.3rem',
                                transition: 'width 0.1s linear',
                            }}
                        ></div> */}
                        <div className="progres-circle" style={{
                            position: "relative",
                            left: `${getProgress()}%`,
                            backgroundColor: '#F7EED3',
                            borderRadius: "50%",
                            top: "50%",
                            width: "0.5rem",
                            height: "0.5rem",
                            transition: 'left 0.1s linear',
                        }}></div>
                    </div>
                </div>
                <div className="media-nav">
                    <div className="shuffle">
                        <ShuffleIcon className="shuffle-icon" style={{
                            fontSize: "1.2rem"
                        }} />
                    </div>
                    <div className="nav-left" onClick={handlePrev}>
                        <KeyboardDoubleArrowLeftIcon />
                    </div>
                    <div className="play-pause" onClick={handlePlay}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </div>
                    <div className="nav-right" onClick={handleNext}>
                        <KeyboardDoubleArrowRightIcon />
                    </div>
                    <div className="repeat-container">
                        <LoopIcon className="repeat" style={{
                            fontSize: "1.3rem"
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MediaPlayer;
