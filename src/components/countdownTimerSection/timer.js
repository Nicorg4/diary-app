import React, { useState, useEffect } from 'react';
import { TimerContainer, RemainingTime, StopButton } from './components'
import './styles.css'

const CountdownTimer = ({ initialTime, onTimeout, stopTimer }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => {
        const newTime = prevTime - 1;

        if (newTime === 0) {
          clearInterval(intervalId);
          onTimeout();
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimeout]);

  const formattedTime = `${Math.floor(timeRemaining / 3600).toLocaleString('en-US', { minimumIntegerDigits: 2 })}:${Math.floor((timeRemaining % 3600) / 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}:${(timeRemaining % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;

  const progress = 1 - timeRemaining / initialTime;

  return (
    <TimerContainer>
      <label>
        <RemainingTime style={{color:"white"}}>{formattedTime}</RemainingTime> 
        <progress value={progress} max="1" style={{width:'200px'}}/>
        <StopButton onClick={stopTimer}>Parar</StopButton>
      </label>
    </TimerContainer>
  );
};

export default CountdownTimer;
