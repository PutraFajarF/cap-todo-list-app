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
  return (
    <div>
      <Header />
      <CreateNote addNote={noteAdd} />
      {notes.map((noteList, i) => {
        return(
          <Note 
            key={i}
            id={i}
            title={noteList.title}
            content={noteList.content}
            deleteNote={noteDelete}
          />
        )
      })}
      {/* <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
