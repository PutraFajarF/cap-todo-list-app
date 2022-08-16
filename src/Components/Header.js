import React from 'react';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Header = () => {
  return (
    <header>
      <h1>
        <TipsAndUpdatesIcon fontSize='large' />
        Cap ToDoList App
        <TipsAndUpdatesIcon fontSize='large' />
      </h1>
    </header>
  );
};

export default Header;