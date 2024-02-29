import React, { useEffect, useState } from 'react'
import { MainContainer, ClockContainer, Clock, DateContainer, Date } from './components'
import { getCurrentTime, getCurrentDate } from './methods'

const TimeSection = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  
  const updateCurrentTime = () => {
    const newCurrentTime = getCurrentTime();
    setCurrentTime(newCurrentTime);
  };

  const updateCurrentDate = () => {
    const newCurrentDate = getCurrentDate();
    setCurrentDate(newCurrentDate);
  };

  useEffect(() => {  
    updateCurrentTime();
    updateCurrentDate();

    const intervalTimeId = setInterval(updateCurrentTime, 1000);

    const intervalDateId = setInterval(() => {
      const newDate = getCurrentDate();
      if(newDate !== currentDate){
        updateCurrentDate();
      }
    }, 6000);

    return () => { 
      clearInterval(intervalTimeId);
      clearInterval(intervalDateId);
    }
  }, [currentDate]);
  

  return (
    <MainContainer>
      <ClockContainer>
        <Clock>{currentTime}</Clock>
      </ClockContainer>
      <DateContainer>
        <Date>{currentDate}</Date>
      </DateContainer>
    </MainContainer>
  )
}

export default TimeSection