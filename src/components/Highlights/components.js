import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainContainer = styled.div`
    height: 67% ;
    width: 500px ;
    margin-top: 50px ;
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px ;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    position: relative ;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const TimeScaleContainer = styled.div`
    display: flex ;
    width: 100% ;
    margin-bottom: 20px ;
`

export const ScaleButton = styled.button`
    width: 50% ;
    padding: 15px ;
    background-color: ${props => props.active ? 'rgba(255,255,255,0.04)' : 'transparent'};
    box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.4) 3px 3px 10px 0px inset, transparent -3px -3px 6px 1px inset' : 'rgba(0, 0, 0, 0.35) 0px 2px 10px'};
    border: none ;
    color: white;
    font-size: 20px ;
    border-top-left-radius: ${props => props.right ? '' : '20px'};
    border-top-right-radius: ${props => props.right ? '20px' : ''};

    &:hover{
        transition: 0.5s ease ;
        background-color: transparent ;
        cursor: pointer;
    }
`

export const CardsContainer = styled.div`
    display: grid ;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    overflow: auto;
    padding-bottom: 20px;
    max-height: 560px;

    &::-webkit-scrollbar {
        display: none ;
    }
`

export const Card = styled.div`
    height: 120px ;
    width: 170px ;
    background-color: rgba(255,255,255,0.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    border-radius: 15px ;
    display: flex ;
    position: relative ;
    flex-direction: column ;
    align-items: center ;
    padding: 15px ;

    &:hover{
        transition: 0.5s ease ;
        background-color: rgba(255,255,255,0.2);
    }

    &.visible {
        opacity: 0;
        transform: translateY(20px);
        animation: ${fadeInUp} 0.5s forwards;
    }
`

export const CardTitle = styled.p`
    color: white ;
    text-align: center ;
    font-size: 20px ;
    margin: 0 ;
    margin-bottom: 10px ;
    max-width: 150px;
`

export const CardTime = styled.p`
    position: absolute ;
    color: rgba(255,255,255,0.3) ;
    width: 80%;
    text-align: center ;
    bottom: 5px;
    padding: 2px 0px 2px 0px;
    margin: 0 ;
    border-top: 1px solid rgba(255,255,255,0.5);
`

export const NoDataMessage = styled.p`
    margin-top: 50% ;
    font-size: 24px;
    color: rgba(255,255,255,0.3);
    font-weight: normal ;
`

export const ScrollButton = styled.button`
    position: absolute ;
    bottom: 10px;
    width: 83% ;
    border: none ;
    border-radius: 5px ;
    color: white ;
    background-color: rgba(0,0,0,0.4);
    font-size: 24px;

    &:hover{
        cursor: pointer ;
        background-color: rgba(0,0,0,0.3);
    }
`