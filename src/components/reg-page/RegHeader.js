import React from 'react';
import logo from './wishlylogo.png';
import './RegHeader.css';
const RegHeader = () => {
  return (
    <div className=" RegHeader flex  ">
      <div className="mt-12 ml-48">
        <img src={logo} height={88} width={317} />
      </div>
    </div>
  );
};

export default RegHeader;
