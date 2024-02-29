import React, { useEffect, useRef, useState } from 'react'
import { MainContainer, TimeScaleContainer, ScaleButton, CardsContainer, Card, CardTitle, CardTime, NoDataMessage, ScrollButton } from './components'
import { fetchTodayAppointments, fetchThisMonthAppointments } from './methods'
import { FaAngleDown } from "react-icons/fa";

const Highlights = ({ setHighlightsRef }) => {
  const [timeScale, setTimeScale] = useState('today');
  const [todayActive, setTodayActive] = useState(true);
  const [thisMonthActive, setThisMonthActive] = useState(false);
  const [todayAppointments, setTodayAppointments] = useState([])
  const [thisMonthAppointments, setThisMonthAppointments] = useState([])
  const [hasOverflow, setHasOverflow] = useState(false);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const getTodayAppointments = async () => {
    const newTodayAppointments = await fetchTodayAppointments();
    setTodayAppointments(newTodayAppointments);
  };

  const getThisMonthAppointments = async () => {
    const newThisMonthAppointments = await fetchThisMonthAppointments();
    setThisMonthAppointments(newThisMonthAppointments);
  }

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const hasHorizontalOverflow = container.scrollWidth > container.clientWidth;
      const hasVerticalOverflow = container.scrollHeight > container.clientHeight;
      setHasOverflow(hasHorizontalOverflow || hasVerticalOverflow);
    }

    getTodayAppointments();
    getThisMonthAppointments();
    setHasAnimated(true);
    setHighlightsRef({ getTodayAppointments, getThisMonthAppointments });

    const intervalTodayAppointmentsId = setInterval(getTodayAppointments, 30 * 60 * 1000);
    const intervalThisMonthAppointmentsId = setInterval(getThisMonthAppointments, 30 * 60 * 1000);

    return () => { 
      clearInterval(intervalTodayAppointmentsId);
      clearInterval(intervalThisMonthAppointmentsId);
    }
    
  }, [setHighlightsRef])
  

  const handleTodayButtonClick = () => {
    setTimeScale('today');
    setTodayActive(true);
    setThisMonthActive(false);
  }

  const handleThisMonthButtonClick = () => {
    setTimeScale('thisMonth');
    setThisMonthActive(true);
    setTodayActive(false);
  }

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MainContainer>
      <TimeScaleContainer>
        <ScaleButton active={thisMonthActive} onClick={handleTodayButtonClick}>Hoy</ScaleButton>
        <ScaleButton right active={todayActive} onClick={handleThisMonthButtonClick}>Este mes</ScaleButton>
      </TimeScaleContainer>
      {timeScale === 'today' ? (
        todayAppointments.length === 0 ? (
          <NoDataMessage>No hay ningún evento para hoy.</NoDataMessage>
        ) : (
          <CardsContainer>
            {todayAppointments.map((appointment) =>  (
                <Card className={hasAnimated ? "visible" : ""}>
                  <CardTitle>{appointment.title}</CardTitle>
                  <CardTime>{appointment.formattedTime}hs</CardTime>
                </Card>
            ))}
            </CardsContainer>
        )
      ) : (
        thisMonthAppointments.length === 0 ? (
          <NoDataMessage>No hay ningún evento este mes.</NoDataMessage>
        ) : (
          <CardsContainer ref={containerRef}>
            {thisMonthAppointments.map((appointment) =>  (
                <Card className={hasAnimated ? "visible" : ""}>
                  <CardTitle>{appointment.title}</CardTitle>
                  <CardTime>{appointment.formattedTime}hs</CardTime>
                </Card>
            ))}
             {hasOverflow ? (
                <ScrollButton onClick={scrollToBottom}><FaAngleDown /></ScrollButton>
              ) : null};
          </CardsContainer>
        )
      )}
    </MainContainer>
  )
}

export default Highlights