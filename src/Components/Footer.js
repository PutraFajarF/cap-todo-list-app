import React from 'react';

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Putra Fajar F | Copyright ⓒ {getYear}</p>
    </footer>
  );
};

export default Footer;