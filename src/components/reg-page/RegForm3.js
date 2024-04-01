import React, { useState } from 'react';

const RegForm3 = () => {
  const [name, setName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [additionalInfoFocused, setAdditionalInfoFocused] = useState(false);

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(false);
  };

  const handleAdditionalInfoFocus = () => {
    setAdditionalInfoFocused(true);
  };

  const handleAdditionalInfoBlur = () => {
    setAdditionalInfoFocused(false);
  };

  return (
    <div className="w-1/2">
      <div className="size-custom2 bg-custompurple-500 rounded-4xl p-6 ml-12 mt-32">
        <p className="text-custom4 font-bold text-custompurple-200 mt-6 mb-6">
          Дополните информацию <br></br> о себе
        </p>
        <div />

        <div className="mb-4" onClick={handleNameFocus}>
          <input
            className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 flex-grow focus:outline-none text-custom3 rounded-2sm focus:text-white pl-3  w-96"
            type="text"
            placeholder={nameFocused ? '' : 'Введите ваше имя'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
          />
        </div>

        <div className="mb-2">
          <textarea
            className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400  h-24 w-96
              resize-none flex-grow focus:outline-none text-custom3 rounded-2sm focus:text-white px-3  "
            placeholder={additionalInfoFocused ? '' : 'Расскажите о себе'}
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            onFocus={handleAdditionalInfoFocus}
            onBlur={handleAdditionalInfoBlur}
          />
        </div>

        <div>
          <button
            className="rounded-4xl bg-custompurple-100 py-2 px-4 mr-6 text-custom2 font-bold
           text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg 
           hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50 mb-4"
          >
            Вернуться
          </button>
          <button
            className="rounded-4xl bg-custompurple-100 py-2 px-4 text-custom2 font-bold
           text-customgray-100 opacity-100 transition-opacity duration-200 ease-in-out shadow-lg 
           hover:shadow-2xl hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50 mb-4"
          >
            Продолжить
          </button>
        </div>

        <div className="flex justify-center">
          <div className="bg-customgray-100 h-1 w-4/5 rounded-4xl mb-4"></div>
        </div>
        <div className="flex justify-center">
          <p className="mr-1 text-custom13 ">
            Регистрируясь, вы соглашаетесь с Условиями обслуживания, и Политикой
            конфиденциальности.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegForm3;
