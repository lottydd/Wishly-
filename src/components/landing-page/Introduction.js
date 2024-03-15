import React from 'react';
import './Introduction.css'; // Импорт файла стилей

const Introduction = () => {
  return (
    <div className="Introduction  text-center mx-auto">
      <h1>Wishly - Онлайн-платформа для создания вишлистов подарков</h1>
      <p>Создайте свой первый вишист для подарков уже сегодня.</p>
      <button>Создать</button>
    </div>
  );
};

export default Introduction;
