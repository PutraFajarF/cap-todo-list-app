import React from 'react';

const Note = ({ title, content }) => {
  // const { title, content } = props
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Note;