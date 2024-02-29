import React, { useState } from 'react';
import { MainContainer, VideoBackground, Section } from './components';
import SideBar from '../SideBar'; 
import TimeSection from '../TimeSection';
import Highlights from '../Highlights';
import NotesSection from '../notesSection';
import CalendarAppointments from '../calendarAppointmentsSection'
import CountdownTimer from '../countdownTimerSection';
import backgroundVideo from '../../assets/background-video.mp4';
import styled from 'styled-components';

const SuccessMessage = styled.p`
  position: absolute ;
  width: 90% ;
  text-align: center ;
  padding: 10px ;
  background-color: rgba(116, 196, 104, 0.7) ;
  color: white ;
  left: 100px;
  border-radius: 10px ;
  z-index: 999 ;
`

const HomeComponent = () => {

  const [highlightsRef, setHighlightsRef] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRefreshAppointments = () => {
    if (highlightsRef) {
      highlightsRef.getTodayAppointments();
      highlightsRef.getThisMonthAppointments();
    }
  };

  const handleShowSuccessMessage = (message) => {
    setSuccessMessage(message)
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  return (
    <>
    {showSuccessMessage && (
      <SuccessMessage>{successMessage}</SuccessMessage>
    )}
    <MainContainer>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </VideoBackground>
      <SideBar/>
      <Section>
        <TimeSection/>
        <Highlights setHighlightsRef={setHighlightsRef}/>
      </Section>
      <Section>
        <NotesSection handleShowSuccessMessage={handleShowSuccessMessage}/>
      </Section>
      <Section>
        <CalendarAppointments refreshAppointments={handleRefreshAppointments} handleShowSuccessMessage={handleShowSuccessMessage}/>
        <CountdownTimer/>
      </Section>
    </MainContainer>
    </>
  );
};

export default HomeComponent;
