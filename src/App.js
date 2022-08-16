import React, { useState } from "react";

// Styles
import './App.css';

// Components
import Header from "./Components/Header";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";


function App() {
  const [notes, setNotes] = useState([]);

  const noteAdd = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  };

  const noteDelete = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteList, i) => {
        return i !== id;
      })
    })
  }

  const noteEdit = (id, title, content) => {
    console.log(id);
    const noteUpdated = notes.find(note => note.id === id);
    noteUpdated.id = id;
    noteUpdated.title = title;
    noteUpdated.content = content;
    setNotes([...notes])
  }
  return (
    <div>
      <Header />
      <CreateNote addNote={noteAdd} />
      {notes.map((noteList, i) => {
        return(
          <Note 
            key={noteList.id}
            num={i}
            id={noteList.id}
            title={noteList.title}
            content={noteList.content}
            deleteNote={noteDelete}
            editNote={noteEdit}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
