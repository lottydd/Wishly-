import React from 'react';
import logo from './wishlylogo.png';
import { RxGear } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import './MainPage.css';

const MainPageHeader = () => {
  return (
    <div className="MainPageHeader flex justify-center">
      <div className="mt-12 mr-72">
        <img src={logo} height={88} width={317} alt="Wishly Logo" />
      </div>
      <div className="ml-72 mt-16 space-x-8">
        <button className="icon-button" aria-label="Войти">
          <RxGear className="text-custompurple-500 hover:text-customgray-100 w-12 h-12" />
        </button>
        <button className="icon-button" aria-label="Регистрация">
          <CgProfile className="text-custompurple-500 hover:text-customgray-100 w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default MainPageHeader;
