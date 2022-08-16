import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Note = (props) => {
  const [displayForm, setForm] = useState(false);
  const [note, setNote] = useState(props);

  const handleDelete = () => {
    props.deleteNote(props.num)
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const title = e.target.children[0].value;
    const content = e.target.children[1].value;
    props.editNote(props.id, title, content)

    setForm(false);
  }

  const onChangeValue = (e) => {
    setNote(e.target.value);
  }
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <form 
        onSubmit={handleEdit}
        className={`${displayForm ? 'show' : 'hide'}`}
        style={{ position: 'fixed', bottom: '53%', height: '28%', right: '32.5%', zIndex: '1' }}
      >
        <input placeholder='Update title here..' onChange={onChangeValue} value={note.title} />
        <input placeholder='Update content here..' onChange={onChangeValue} value={note.content} />
        <button style={{ position: 'relative', top: '31%', color: 'white', width: '15%', backgroundColor: '#820000', borderRadius: '10%', right: '37%' }}>Update</button>
      </form>
      <button onClick={handleDelete}>
        <DeleteForeverIcon />
      </button>
      <button onClick={() => setForm(!displayForm)}>
        <EditIcon />
      </button>
    </div>
  );
};

export default Note;