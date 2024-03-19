import React from 'react';
import './JoinToday.css';

const JoinToday = () => {
  return (
    <div className="JoinToday bg-custompurple-100 flex flex-col justify-center items-center ">
      <div className="text-customgray-100">
        <h1 className="text-custom9 font-bold text-center leading-tight mb-20">
          Присоединяйтесь к нам уже сегодня!
        </h1>
        <p className="text-center text-custom6 font-semibold leading-tight mx-1 my-2 mb-12">
          Зарегистрируйтесь прямо сейчас, чтобы начать создавать <br></br> свои
          вишлисты и делиться подарочным настроением с <br></br> близкими.
          Wishly – ваш верный помощник в мире подарков!
        </p>
      </div>
      <div>
        <button className="rounded-4xl bg-custompurple-300 py-3 px-6 text-custom4 font-bold text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default JoinToday;
