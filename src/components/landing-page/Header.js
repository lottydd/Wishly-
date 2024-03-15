import React from 'react';
import './Header.css'; // Импорт файла стилей

import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <div className="Header text-center">
      <HeaderButtons />
    </div>
  );
};

export default Header;
