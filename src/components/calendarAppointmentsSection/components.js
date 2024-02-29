import styled from "styled-components";


export const MainContainer = styled.div`
    height: 56.5% ;
    width: 500px ;
    margin-top: 50px ;
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px ;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative ;
`

export const TitleContainer = styled.div`
    display: flex ;
    width: 500px;
    height: 60px ;
    margin-bottom: 20px ;
    align-items: center ;
    justify-content: center ;
    background-color:  rgba(0,0,0,0.15);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const AppointmentsTitle = styled.text`
    color: white;
    font-size: 30px ;
`

export const DatePickerContainer = styled.div`
    margin-top: 10px ;
`

export const ConfirmAppointmentButton = styled.button`
    position: absolute ;
    bottom: 50px;
    width: 200px ;
    padding: 10px ;
    border: none ;
    border-radius: 5px ;
    color: white ;
    background-color:  rgba(0,0,0,0.2);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;

    &:hover{
        cursor: pointer ;
        background-color: rgba(0,0,0,0.3);
    }
`

export const AppointmentTitleInput = styled.input`
    padding: 10px 25px 10px 25px ;
    border: none ;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.05);
    box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px inset;
    font-size: 20px ;
    color: white;

    &:hover{
        transition: 0.5s ease ;
        background-color: rgba(255,255,255,0.2);
    }

    &:focus{
        background-color: rgba(255,255,255,0.3);
        outline: none;
    }

    &::placeholder{
        color: rgba(255,255,255,0.3) ;
    }
`

export const CreateAppointmentContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    margin-top: 280px ;
`

export const CreateAppointmentLabel = styled.text`
    color: white ;
    font-size: 20px ;
    padding: 5px;
`