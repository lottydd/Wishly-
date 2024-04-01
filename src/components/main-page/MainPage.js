import React from 'react';
import MainPageHeader from './MainPageHeader';
import MainPageProfile from './MainPageProfile';
import MainPageContent from './MainPageContent';
import MainPageFooter from './MainPageFooter';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className=" MainPage bg-custompurple-100 ">
      <MainPageHeader />
      <MainPageProfile />
      <MainPageContent />
      <div className="h-1.5 bg-customgray-100"></div>
      <MainPageFooter />
    </div>
  );
};

export default MainPage;
