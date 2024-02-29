import React, { useEffect, useState } from 'react';
import { NoteWrapper, NoteContainer, NoteTopBar, NoteTitle, NoteDescription, NoteDate, NoteButtonsContainer, MoveNoteButton } from './components';
import { markAsCompleted } from './methods'
import { FaChevronDown, FaChevronUp, FaCheck  } from "react-icons/fa";


const Note = ({ note, index, moveNote, deleteNote }) => {

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleCompletedTask = () => {
    markAsCompleted(note._id);
    deleteNote(note._id);
  }

  return (
    <NoteWrapper>
      <NoteTopBar>
          <NoteTitle>{note.title}</NoteTitle>
          <NoteButtonsContainer>
            <MoveNoteButton onClick={() => moveNote(index, -1)}><FaChevronUp /></MoveNoteButton>
            <MoveNoteButton onClick={() => moveNote(index, 1)}><FaChevronDown /></MoveNoteButton>
            <MoveNoteButton check onClick={handleCompletedTask}><FaCheck /></MoveNoteButton>
          </NoteButtonsContainer>
      </NoteTopBar>
      <NoteContainer className={hasAnimated ? "visible" : ""}>
        <NoteDescription>{note.description}</NoteDescription>
        <NoteDate>{note.timeStamp}</NoteDate>
      </NoteContainer>
    </NoteWrapper>
  );
};

export default Note;
