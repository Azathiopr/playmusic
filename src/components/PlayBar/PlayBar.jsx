import React, { useContext } from 'react';
import s from './PlayBar.module.scss'
import { AudioContext } from '../../Context/AudioContext';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import secondsToMMSS from '../../utils/secondsToMMSS';
import TimeControls from './TimeControls/TimeControls';

const PlayBar = () => {
    const { currentTrack, isPlaying, handleToggleAudio } = useContext(AudioContext)
    const { title, artists, preview, duration } = currentTrack

    const formattedDuration = secondsToMMSS(duration)


    return (
        <div>
            <>
                {
                    Object.keys(currentTrack).length > 0 &&
                    <div className={s.playbar}>
                        <img src={preview} alt={title} className={s.preview} />
                        <IconButton onClick={() => handleToggleAudio(currentTrack)}>
                            {isPlaying ? <Pause /> : <PlayArrow />}
                        </IconButton>
                        <div className={s.credits} >
                            <h4>{title}</h4>
                            <p>{artists} </p>
                        </div>
                        <div className={s.slider} >
                            <TimeControls />
                            <p>{formattedDuration} </p>
                        </div>
                    </div>
                }
            </>
        </div>
    );
};

export default PlayBar;