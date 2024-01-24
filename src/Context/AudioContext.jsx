import { createContext, useRef, useState } from "react";


export const AudioContext = createContext({})

const AudioProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = useRef(new Audio())

    const handleToggleAudio = (track) => {
        if (currentTrack.id !== track.id) {
            setCurrentTrack(track)
            setIsPlaying(true)

            audio.current.src = track.src
            audio.current.currentTime = 0
            audio.current.play()
            return
        }
        if (isPlaying) {
            setIsPlaying(false)
            audio.current.pause()
        } else {
            setIsPlaying(true)
            audio.current.play()
        }
    }

    const value = {
        audio: audio.current,
        currentTrack,
        isPlaying,
        handleToggleAudio,
    }


    return (
        <AudioContext.Provider value={value}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioProvider;