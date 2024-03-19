import React from 'react';
import RegHeader from './RegHeader';
import RegBody from './RegBody';
import RegFooter from './RegFooter';

const RegPage = () => {
  return (
    <div className="bg-custompurple-100 text-customgray-100">
      <RegHeader />
      <RegBody />
      <div className="h-1.5 bg-customgray-100"></div>
      <RegFooter />
    </div>
  );
};

export default RegPage;
