import React, { useState } from 'react';

const CreateNote = (props) => {
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
  return (
    <div>
      <form>
        <input 
          name='title'
          onChange={handleChange}
          value={note.title}
          placeholder='Title'

        />
        <textarea 
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note..' 
          rows='3' 
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;