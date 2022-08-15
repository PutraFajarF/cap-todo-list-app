import React from "react";

// Styles
import './App.css';

// Components
import Header from "./Components/Header";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

// Mock Data
import mockData from "./mockData";


function App() {
  return (
    <div className="App">
      <Header />
      {mockData.map(note => (
        <Note 
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
      {/* <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
