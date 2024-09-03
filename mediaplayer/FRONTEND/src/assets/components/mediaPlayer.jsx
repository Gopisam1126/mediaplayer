import { useState, useRef, useEffect } from "react";
import "../componentStyles/mediaPlayer.css";
import axios from "axios";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function MediaPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const track = {
        fileUrl: "/songs/Baby_Jean_-_KAAYI__lyrics_(256k).mp3",
        artist: "Baby Jean",
        title: "KAAYI"
    }

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

    // function nextSong() {

    // }

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

    return <>
        <section className="mp-section">
            <audio ref={audioRef} src={track.fileUrl} onTimeUpdate={handleTimeUpdate} onLoadedData={handleDuration}/>
            <div className="mp-container">
                <img src="\images\thumbnail_rough.jpg" alt="thumbnail" className="media-tn" />
            </div>
            <div className="st-container">
                <p className="song-title">
                    {track.title}
                </p>
            </div>
            <div className="media-nav">
                <div className="nav-left">
                    <KeyboardDoubleArrowLeftIcon/>
                </div>
                <div className="play-pause" onClick={handlePlay}>
                    {
                        isPlaying ? <PauseIcon/> : <PlayArrowIcon/>
                    }
                </div>
                <div className="nav-right">
                    <KeyboardDoubleArrowRightIcon/>
                </div>
            </div>
            <div className="timer-container">
                <p className="timer">
                    {formatTime(currentTime)}
                </p>
            </div>
            <div className="progres-container">
                <div className="progres">
                    <div className="cr-pr" style={{
                        width: `${getProgress()}%`,
                        backgroundColor: '#57A6A1',
                        height: '100%',
                        transition: 'width 0.1s linear',
                        }}></div>
                </div>
            </div>
        </section>
    </>
}

export default MediaPlayer;