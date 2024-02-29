import React, { useEffect, useState } from 'react'
import { MainContainer, TitleContainer, MainTitle, NotesContainer, CreateNoteContainer, NoNotesMessage, CreateNoteForm, CreateNoteLabel, CreateNoteTitleInput, CreateNoteDescriptionInput, ConfirmNoteButton } from './components.js'
import Note from './note.js'
import { fetchNotes, createNewNote } from './methods.js'


const NotesSection = ({ handleShowSuccessMessage }) => {
  const[notes, setNotes] = useState([]);
  const[noteTitle, setNewNoteTitle] = useState('');
  const[noteDescription, setNewNoteDescription] = useState('');

  const fetchNotesData = async () => {
    const newNotes = await fetchNotes() || [];
    setNotes(newNotes);
  }

  useEffect(() => {
    fetchNotesData();
  }, []);

  const handleCreateNote = async (event) => {
    event.preventDefault();
  
    if (noteTitle && noteDescription) {
      try {
        await createNewNote(noteTitle, noteDescription);
        fetchNotesData();
        handleShowSuccessMessage("Note successfully created.");
        setNewNoteTitle('');
        setNewNoteDescription('');
      } catch (error) {
        console.error('Error al crear una nueva nota:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleCreateNote(event);
    }
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note._id !== noteId);
    setNotes(updatedNotes);
  };

  const moveNote = (index, direction) => {
     if((direction === 1 && index !== notes.length - 1) || (direction === -1 && index !== 0)){
      const updatedNotes = [...notes];
      [updatedNotes[index], updatedNotes[index + direction]] = [updatedNotes[index + direction], updatedNotes[index]]
      setNotes(updatedNotes)
     }
  }
  
  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Notas</MainTitle>
      </TitleContainer>
      {notes.length !== 0 ? (
        <NotesContainer>
          {notes.map((note, index) =>  (
            <Note note={note} index={index} moveNote={moveNote} deleteNote={deleteNote}/>
          ))}
      </NotesContainer>
      ) : (
        <NoNotesMessage>No hay ninguna nota.</NoNotesMessage>
      )}
      <CreateNoteContainer>
        <CreateNoteForm onSubmit={handleCreateNote}>
          <CreateNoteLabel>Crear nota</CreateNoteLabel>
          <CreateNoteTitleInput placeholder="Título..." value={noteTitle} onChange={(event) => setNewNoteTitle(event.target.value)}/>
          <CreateNoteDescriptionInput placeholder="Descripción..." value={noteDescription} onChange={(event) => setNewNoteDescription(event.target.value)} onKeyPress={handleKeyPress}/>
          <ConfirmNoteButton value="submit">Crear nota</ConfirmNoteButton>
        </CreateNoteForm>
      </CreateNoteContainer>
    </MainContainer>
  )
}

export default NotesSection