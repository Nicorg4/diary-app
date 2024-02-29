import styled from 'styled-components';

export const SideBarContainer = styled.div`
    height: 100vh;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center ;
    background-color: rgba(0,0,0,0.6);
    z-index: 1;
`;

export const LinksContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center;
    align-items: center ;
    padding: 10px;
    height: 90%;
    gap: 30px ;
`

export const Link = styled.a`
    transition: 0.2s ease-in ;
    font-size: 35px;
    background-color: rgba(255,255,255, 0.05);
    padding: 10px;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    border-radius: 7px ;
    text-align: center;
    color: rgba(255,255,255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
    &:hover{
        color: white;
        background-color: ${props => props.iconColor || 'white'};
    }
`;
export const Button = styled.button`
    transition: 0.2s ease-in ;
    font-size: 35px;
    background-color: rgba(255,255,255, 0.05);
    padding: 10px;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    border-radius: 7px ;
    text-align: center;
    color: rgba(255,255,255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
    border: none ;
    &:hover{
        color: white;
        cursor: pointer ;
        background-color: ${props => props.iconColor || 'white'};
    }
`;