import React, { useState } from 'react'
import { MainContainer, TitleContainer, Title, TimerSetForm, TimerProgressContainer, TimeInput, SubmitButton } from './components'
import { playAlarmSound } from './methods'
import Timer from './timer'

const CountdownTimer = () => {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  const handleTimeout = () => {
    playAlarmSound();
    setTotalTime(null);
  };

  const handleTimerSetSubmit = (e) => {
    e.preventDefault();
    const hoursInSeconds = hours * 60 * 60;
    const minutesInSeconds = minutes * 60;
    const newTotalTime = Number(hoursInSeconds) + Number(minutesInSeconds) + Number(seconds);
    setTotalTime(newTotalTime);
  }

  const stopTimer = () => {
    setTotalTime(null);
  }

  return (
    <MainContainer>
      <TitleContainer>
        <Title>Cronómetro</Title>
      </TitleContainer>   
        {totalTime ? (
          <TimerProgressContainer>
            <Timer initialTime={totalTime} onTimeout={handleTimeout} stopTimer={stopTimer}/>
          </TimerProgressContainer>
        ) : (
          <>
          <TimerSetForm onSubmit={handleTimerSetSubmit}>
            <TimeInput type="number" placeholder="00" min='0' value={hours} onChange={(e) => setHours(e.target.value)} />
            <TimeInput type="number" placeholder="00" min='0' value={minutes} onChange={(e) => setMinutes(e.target.value)} />
            <TimeInput type="number" placeholder="00" min='0' value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            <SubmitButton value="submit" disabled={!hours && !minutes && !seconds}>Iniciar</SubmitButton>
          </TimerSetForm>
          </>
        )}
    </MainContainer>
  )
}

export default CountdownTimer