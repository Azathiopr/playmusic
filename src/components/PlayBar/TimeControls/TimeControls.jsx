import React, { useContext, useEffect, useState } from 'react';
import secondsToMMSS from '../../../utils/secondsToMMSS';
import { AudioContext } from '../../../Context/AudioContext';
import { Slider } from '@mui/material';

const TimeControls = () => {
    const { audio, currentTrack } = useContext(AudioContext)
    const { duration } = currentTrack

    const [currenTime, setCurrentTime] = useState(0)


    const formatedCurrentTime = secondsToMMSS(currenTime)
    const sliderCurrentTime = Math.round((currenTime / duration) * 100)

    const handleChangeCurrentTime = (_, value) => {
        const time = Math.round((value / 100) * duration)
        setCurrentTime(time)
        audio.currentTime = time
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(audio.currentTime)
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    return (
        <>
            <p>{formatedCurrentTime}</p>
            <Slider onChange={handleChangeCurrentTime} value={sliderCurrentTime} step={1} min={0} max={100} />
        </>
    );
};

export default TimeControls;