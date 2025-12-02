import React from 'react';
import './Timer.css';
import { use } from 'react';
import { useEffect } from 'react';
const CounterTimer = () => {

    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const timerRef = React.useRef(null);


    const handleChange = (e) => {
        setTime(parseInt(e.target.value * 60));
    }

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        // Logic to start the timer


    }

    const handleStop = () => {
        setIsPaused((!isPaused));
        setIsActive(true);


        // Logic to stop the timer
    }
    const handleReset = () => {
        // Logic to reset the timer
        setIsActive(false);
        setIsPaused(false);
        setTime(0);
        clearInterval(timerRef.current);
        alert('Timer Reset');
    }
    useEffect(() => {
        if (isActive && !isPaused && time > 0 ) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        else if (time==0){ 
            clearInterval(timerRef.current);
            setIsActive(false);
        }   
        return () => clearInterval(timerRef.current);
    }, [isActive, isPaused]);



    return (
        <div className='countdown-timer'>
             <h2>Counter Timer</h2> 
            <div className='timer-display'>
                <input
                    type="number"
                    placeholder='Enter time in minute'

                    onChange={handleChange}
                />
                <div className='seconds-display'>{formatTime()}</div>
            </div>
            <div className='timer-controls'>
                <button className='start-btn' onClick={handleStart}
                    disabled={isActive && !isPaused}>Start</button>
                <button className='stop-btn' onClick={handleStop}  
                disabled={!isActive}  >{isPaused ? 'Resume' : 'Paused'}</button>
                <button className='reset-btn' onClick={handleReset} 
               
                >Reset</button>
            </div>

        </div>
    )
}
export default CounterTimer;