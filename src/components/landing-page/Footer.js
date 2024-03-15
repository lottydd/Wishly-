import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="column">
          <h3>Часто задаваемые вопросы</h3>
          <ul>
            <li>Помощь</li>
            <li>Как это работает</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="column c">
          <h3>Юридическая информация</h3>
          <ul>
            <li>Условия использования</li>
            <li>Политика конфиденциальности</li>
            <li>О нас</li>
          </ul>
        </div>
        <div className="logo-column">
          <img src="path_to_logo_image" alt="Логотип" />
          <p className="text-">Copyright © 2024 Wishly</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
