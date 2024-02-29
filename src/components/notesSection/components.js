import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.div`
    height: 85% ;
    width: 535px ;
    padding: 0px 50px 50px 50px ;
    margin-top: 50px ;
    position: relative ;
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px ;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const TitleContainer = styled.div`
    display: flex ;
    width: 635px;
    height: 70px ;
    align-items: center ;
    justify-content: center ;
    background-color:  rgba(0,0,0,0.15);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const MainTitle = styled.text`
    color: white;
    font-size: 30px ;
`

export const NotesContainer = styled.div`
    border-radius: 10px;
    width: 550px;
    min-height: 500px;
    max-height: 650px ;
    overflow: auto ;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    position: relative ;
    padding-bottom: 10px;
    gap: 15px ;
    margin-top: 30px ;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
    }

    &::-webkit-scrollbar-track {
        background-color: #eee;
    }
`

export const NoteWrapper = styled.div`
    
`

export const NoteTopBar = styled.div`
    width: 540px ;
    position: relative ;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 0px ;
    padding: 7px 0px 7px 0px;
    display: flex ;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
    color: white ;

`

export const NoteContainer = styled.div`
    position: relative ;
    color: white;
    width: 500px;
    padding: 30px 20px 0px 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255,255,255,0.05);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;

    &:hover{
        transition: 0.5s ease ;
        background-color: rgba(255,255,255,0.1);
    }

    &.visible {
        opacity: 0;
        transform: translateY(20px);
        animation: ${fadeInUp} 0.5s forwards;
    }
`

export const NoteButtonsContainer = styled.div`
    display: flex ;
    align-items: center ;
    gap: 3px ;
    margin-right: 10px;
    height: 100% ;
`

export const MoveNoteButton = styled.button`
    height: 23px;
    font-size: 18px;
    background-color: rgba(255,255,255,0.1) ;
    border: none ;
    color: white ;
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.check ? 'rgba(116, 196, 104, 0.7)' : 'rgba(255,255,255,0.3)'} ;
    }
`

export const NoteTitle = styled.text`
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 28px;
    align-self: flex-start;
`

export const NoteDescription = styled.p`
    color: rgba(255,255,255,0.5);
    overflow: auto;
    text-overflow: ellipsis;
    max-width: 490px;
    max-height: 90px;
    margin: 0 ;
    padding-left: 10px ;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
    }

    &::-webkit-scrollbar-track {
        background-color: #eee;
    }

`
export const NoteDate = styled.p`
    align-self: flex-end;
    color: rgba(255,255,255,0.3);
    font-size: 12px ;
`


export const CreateNoteContainer = styled.div`
    align-items: center ;
    justify-content: center ;
    width: 100% ;
    border-top: 1px solid rgba(255,255,255,0.3);
    padding-top: 10px;

`
export const CreateNoteForm = styled.form`
    display: flex ;
    flex-direction: column ;
    gap: 5px ;
`
export const CreateNoteTitleInput = styled.input`
    padding: 10px 25px 10px 25px ;
    border: none ;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.05);
    box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 10px 0px inset, transparent -3px -3px 6px 1px inset ;
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
export const CreateNoteDescriptionInput = styled.input`
    padding: 25px ;
    border: none;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.05);
    box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 10px 0px inset, transparent -3px -3px 6px 1px inset ;
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
export const CreateNoteLabel = styled.text`
    color: white ;
    font-size: 20px ;
    padding: 5px;
`
export const NoNotesMessage = styled.h1`
    color: rgba(255,255,255,0.3);
    font-weight: normal ;

`
export const ConfirmNoteButton = styled.button`
    margin-top: 10px;
    width: 200px ;
    padding: 10px ;
    border: none ;
    border-radius: 5px ;
    color: white ;
    background-color:  rgba(0,0,0,0.2);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;
    align-self: center ;

    &:hover{
        cursor: pointer ;
        background-color: rgba(0,0,0,0.3);
    }
`

