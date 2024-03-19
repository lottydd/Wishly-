import React from 'react';
import logo from './wishlylogo.png';
import './Header.css';
const Header = () => {
  return (
    <div className=" Header flex justify-center ">
      <div className="mt-12 mr-48">
        <img src={logo} height={88} width={317} />
      </div>
      <div className="ml-64 mt-16  space-x-8">
        <button className="rounded-4xl bg-custompurple-500 py-3 px-4 text-custom2 font-bold text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50">
          Регистрация
        </button>

        <button className="rounded-4xl bg-custompurple-300 py-3 px-4 text-custom2 font-bold text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50">
          Войти
        </button>
      </div>
    </div>
  );
};

export default Header;
