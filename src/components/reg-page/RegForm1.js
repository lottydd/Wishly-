import React, { useState } from 'react';

const RegForm1 = () => {
  const [value, setValue] = useState('wishly.ru/');
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    if (!value.includes('@name')) {
      setValue('wishly.ru/');
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setValue('wishly.ru/' + newValue);
  };

  return (
    <div className="w-1/2">
      <div className="flex flex-col justify-center">
        <div className="size-custom2 bg-custompurple-500 rounded-4xl p-6 ml-12 mt-32">
          <p className="text-custom5 font-bold text-custompurple-200 mt-6 mb-16">
            Создайте ваш аккаунт
          </p>
          <p className="text-customgray-200 text-custom4 mb-4 font-semibold">
            Введите имя вашего аккаунта:
          </p>
          <div className="flex items-center w-full bg-custompurple-400 rounded-2sm mb-8 py-1 px-2">
            <span className="text-customgray-200 ml-3 bg-custompurple-400 text-custom3">
              wishly.ru/
            </span>
            <input
              className="text-customgray-200 bg-custompurple-400 flex-grow focus:outline-none text-custom3 rounded-2sm"
              onFocus={handleFocus}
              onChange={handleChange}
              value={inputValue}
            />
          </div>
          <button
            className="rounded-4xl bg-custompurple-100 py-2 px-8 text-custom2 font-bold text-customgray-100 
         opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
         hover:bg-custompurple-400 focus:outline-none focus:ring-2
         focus:ring-custompurple-300 focus:ring-opacity-50 mb-8"
          >
            Далее
          </button>
          <div className="flex justify-center">
            <div className="bg-customgray-100 h-1 w-4/5 rounded-4xl mb-4"></div>
          </div>{' '}
          <div className="flex justify-center">
            <p className="mr-1">Уже есть аккаунт?</p>
            <a className="text-custompurple-200 font-bold hover:underline">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm1;
