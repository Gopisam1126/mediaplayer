/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../componentStyles/mediaPlayer.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function MediaPlayer() {

    const [isPlaying, setIsPlaying] = useState(true);

    return <>
        <section className="mp-section">
            <div className="mp-container">
                <img src="\images\thumbnail_rough.jpg" alt="thumbnail" className="media-tn" />
            </div>
            <div className="st-container">
                <p className="song-title">
                    song name.mp3
                </p>
            </div>
            <div className="media-nav">
                <KeyboardDoubleArrowLeftIcon/>
                {
                    isPlaying ? <PauseIcon/> : <PlayArrowIcon/>
                }
                <KeyboardDoubleArrowRightIcon/>
            </div>
            <div className="timer-container">
                <p className="timer">
                    00:00
                </p>
            </div>
            <div className="progres-container">
                <div className="progres">
                    <div className="cr-pr"></div>
                </div>
            </div>
        </section>
    </>
}

export default MediaPlayer;