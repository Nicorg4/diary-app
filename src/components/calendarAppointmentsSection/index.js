import React, { useState } from 'react';
import DatePicker from './datePicker';
import { MainContainer, TitleContainer, ConfirmAppointmentButton, DatePickerContainer, AppointmentTitleInput, AppointmentsTitle, CreateAppointmentLabel, CreateAppointmentContainer } from './components'
import { createNewAppointment } from './methods';

const CalendarAppointments = ({ refreshAppointments, handleShowSuccessMessage }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentTitle, setAppointmentTitle] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreateEvent = async () => {
    const adjustedDate = new Date(selectedDate.getTime() - 3 * 60 * 60 * 1000);
    if (selectedDate && appointmentTitle) {
      try {
        await createNewAppointment({
          title: appointmentTitle,
          date: adjustedDate,
        });
        refreshAppointments();
        handleShowSuccessMessage("Appointment successfully created.");
      } catch (error) {
        console.error(error);
      }
    }
    setAppointmentTitle('');
  };

  return (
    <MainContainer>
      <TitleContainer>
        <AppointmentsTitle>Eventos</AppointmentsTitle>
      </TitleContainer>
      <DatePickerContainer>
        <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange}/>
      </DatePickerContainer>
      <CreateAppointmentContainer>
        <CreateAppointmentLabel>Crear evento</CreateAppointmentLabel>
        <AppointmentTitleInput placeholder="Título.." value={appointmentTitle} onChange={(event) => setAppointmentTitle(event.target.value)}/>
      </CreateAppointmentContainer>
      <ConfirmAppointmentButton onClick={handleCreateEvent}>Crear evento</ConfirmAppointmentButton>
    </MainContainer>
  );
};

export default CalendarAppointments;