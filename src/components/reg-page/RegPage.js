import React from 'react';
import RegHeader from './RegHeader';
import RegForm1 from './RegForm1';
import RegForm2 from './RegForm2';
import RegForm3 from './RegForm3';
import RegForm4 from './RegForm4';
import RegShow from './RegShow';
import RegFooter from './RegFooter';

const RegPage = () => {
  return (
    <div className="bg-custompurple-100 text-customgray-100">
      <RegHeader />
      <div className="RegBody flex text-customgray-100">
        <div className="w-1/2 ">
          <RegShow />
        </div>
        <div className="w-1/2">
          <RegForm4 />
        </div>
      </div>
      <div className="h-1.5 bg-customgray-100 mt-32"></div>
      <RegFooter />
    </div>
  );
};

export default RegPage;
