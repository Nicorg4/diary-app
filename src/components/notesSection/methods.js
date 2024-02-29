const apiUrl = process.env.REACT_APP_API_URL;

export const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

export const fetchNotes = async () => {
    try{
        const response = await fetch(apiUrl + "todos");
        if(!response.ok){
            throw new Error("Error al recuperar las notas");
        }
        const notes = await response.json();

        const formattedNotes = notes.todos.map(note => ({
            ...note,
            timeStamp: formatDateString(note.timeStamp),
          }));
        
        return formattedNotes;
    }catch(error){
        console.error(error);
    }
}

export const createNewNote = async (noteTitle, noteDescription ) => {
    try{
        const response = await fetch(apiUrl + "newTodo", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: noteTitle,
              description: noteDescription,
            }),
        });
        if(!response.ok){
            throw new Error("Error al crear una nueva nota");
        }
        const newNote = await response.json();

        const formattedNote = {
            title: newNote.todo.title,
            description: newNote.todo.description,
            timeStamp: formatDateString(newNote.todo.timeStamp),
        }

        return formattedNote;
    }catch(error){
        console.error(error);
    }
}

export const markAsCompleted = async (noteId) => {
    try{
        const response = await fetch(apiUrl + `deleteTodo/${noteId}`, {
            method: 'DELETE',
        });
        if(!response.ok){
            throw new Error("Error al eliminar la nota.");
        }

    }catch(error){
        console.error(error);
    }

}
