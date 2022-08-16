import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateNote = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const handleSubmit = (e) => {
    props.addNote(note);
    setNote({
      title: '',
      content: ''
    });
    e.preventDefault();
  }

  const expand = () => setExpanded(true);
  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input 
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
          />
        )}
        <textarea 
          name='content'
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note..' 
          rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;