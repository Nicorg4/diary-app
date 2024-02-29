import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GlobalDatePickerStyles } from './datePickerStyles'
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

registerLocale('es', es);
const MyDatePicker = ({ selectedDate, handleDateChange }) => {
  setDefaultLocale('es');
  return (
    <>
      <GlobalDatePickerStyles />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Hora"
        dateFormat="MMMM d, yyyy HH:mm"
        open={true}
        popperPlacement="top-end"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [50, 10],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
      />
    </>
  );
};

export default MyDatePicker;
