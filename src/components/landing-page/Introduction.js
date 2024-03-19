import React from 'react';
import './Introduction.css'; // Импорт файла стилей

const Introduction = () => {
  return (
    <div className="Introduction  text-center mx-auto text-customgray-100">
      <h1 className="text-custom12 font-bold  leading-tight mb-8">
        Wishly - Онлайн-платформа для <br></br> создания вишлистов подарков
      </h1>
      <p className="text-custom6 font-semibold mb-20">
        Создайте свой первый вишист для <br></br> подарков уже сегодня
      </p>
      <button className="rounded-4xl bg-custompurple-300 py-3 px-6 text-custom5 font-bold text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50">
        Создать
      </button>
    </div>
  );
};

export default Introduction;
