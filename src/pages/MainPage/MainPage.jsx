import React, { useState } from 'react';
import s from './MainPage.module.scss'
import trackList from '../../assets/trackList';
import Track from '../../components/Track/Track';
import { Input } from '@mui/material';

const MainPage = () => {
    const [tracks, setTracs] = useState(trackList)

    const handleChange = (e) => {
        const name = e.target.value
        if (!name || name.trim().length <= 0) {
            return setTracs(trackList)
        }

        const lowerCaseName = name.toLowerCase()
        return setTracs(tracks.filter(item =>
            item.title.toLowerCase().includes(lowerCaseName) ||
            item.artists.toLowerCase().includes(lowerCaseName)
        ))
    }

    return (
        <div className={s.search}>
            <Input
                className={s.input} placeholder='Поиск треков'
                onChange={handleChange}
            />
            <div className={s.list}>
                {
                    tracks.map(track => <Track key={track.id} {...track} />)
                }
            </div>
        </div>
    );
};

export default MainPage;