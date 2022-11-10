import React from 'react'
import { useState, useEffect } from 'react';

// Ref: https://stackoverflow.com/questions/40885923/countdown-timer-in-react
function Timer({ interval = 10 }) {
    const [startTime, setStartTime] = useState(Date.now());
    const [time, setTime] = useState(+1);
    const minutes = String(Math.floor(((time / 1000) / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    const miliSeconds = Math.floor((time % 1000) / 10)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(Date.now() - startTime);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <>
            {minutes}:{seconds}.{String(miliSeconds).padStart(2, '0')}
        </>
    );
};

export default Timer;