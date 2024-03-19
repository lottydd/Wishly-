import React from 'react';
import './RegFooter.css';
import logo from './wishlylogo.png';
const RegFooter = () => {
  return (
    <div className="RegFooter bg-custompurple-100 flex flex-col items-center text-customgray-100 ">
      <div className="flex mt-10">
        <div className="mr-20">
          <img src={logo} height={88} width={317} />
        </div>
        <div className="flex">
          <div className="mr-20 text-custom2">
            <h3 className="font-bold">Часто задаваемые вопросы</h3>
            <ul>
              <li>Помощь</li>
              <li>Как это работает</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="text-custom2">
            <h3 className="font-bold">Юридическая информация</h3>
            <ul>
              <li>Условия использования</li>
              <li>Политика конфиденциальности</li>
              <li>О нас</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-custom5">Copyright © 2024 Wishly</h1>
      </div>
    </div>
  );
};

export default RegFooter;
