import styled from "styled-components";


export const MainContainer = styled.div`
    height: 28% ;
    width: 500px ;
    margin-top: 50px ;
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
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
export const Title = styled.text`
    color: white;
    font-size: 30px;
`

export const TimerSetForm = styled.form`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    margin-top: 9%;
    gap: 10px ;
    padding: 20px ;
`

export const TimerProgressContainer = styled.form`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    gap: 10px ;
    padding: 20px ;
`

export const TimeInput = styled.input`
    width: 80px ;
    height: 100px ;
    padding: 10px ;
    border: none ;
    border-radius: 5px ;
    background-color: rgba(255,255,255,0.05);
    box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px inset;
    color: white ;
    font-size: 50px ;

    &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`

export const SubmitButton = styled.button`
    width: 55px ;
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

export const StopButton = styled.button`
    width: 100px ;
    padding: 10px ;
    border: none ;
    border-radius: 5px ;
    color: white ;
    background-color:  rgba(0,0,0,0.2);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;
    z-index: 999 ;

    &:hover{
        cursor: pointer ;
        background-color: rgba(0,0,0,0.3);
    }
`
export const TimerContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    margin-top: -20px;
`

export const RemainingTime = styled.p`
    margin: 0;
    font-size: 20px ;
    margin-bottom: 10px ;
    text-align: center ;
`
export const ProgressBar = styled.progress`
    height: 40px;
`