import React from 'react';
import logo from './wishlylogo.png';
import './RegHeader.css';
const RegHeader = () => {
  return (
    <div className=" RegHeader flex  ">
      <div className="mt-12 ml-56 ">
        <img src={logo} height={88} width={317} />
      </div>
    </div>
  );
};

export default RegHeader;
