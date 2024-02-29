import { createGlobalStyle } from 'styled-components';

export const GlobalDatePickerStyles = createGlobalStyle`

  .react-datepicker__input-container input{
    font-size: 18px ;
    width: 220px ;
    border: none ;
    padding: 10px ;
    color: white;
    text-align: center ;
    background-color:  rgba(0,0,0,0.2);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;
  }
  .react-datepicker__day{
    background-color: transparent;
  }
  .react-datepicker__day:hover{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  .react-datepicker__day--selected{
    background-color: rgba(0, 0, 0, 0.5);
  }
  .react-datepicker{
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
  }
  .react-datepicker__day-name{
    color: white ;
  }
  .react-datepicker__current-month{
    background-color: rgba(0, 0, 0, 0.5);
    color: white ;
  }
  .react-datepicker__day{
    color: white;
  }
  .react-datepicker__header{
    background-color: transparent;
  }
  .react-datepicker__current-month{
    background-color: transparent;
  }
  .react-datepicker-time__header{
    color: white ;
  }
  .react-datepicker__time{
    background-color: transparent ;
  }
  .react-datepicker__time-box{
    background-color: transparent ;
  }
  .react-datepicker__time-list{
    background-color: transparent ;
  }
  .react-datepicker__time-list-item {
    background-color: transparent ;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
    height: 20px ;
    padding-bottom: 0;
    align-items: center;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
    height: 20px ;
    padding-bottom: 0;
    align-items: center;
    justify-content: center ;
    color: white;
  }

  .react-datepicker__time-container .react-datepicker__time{
    background-color: transparent;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
    background-color: rgba(0, 0, 0, 0.5);
    color:white;
  }

 
`;