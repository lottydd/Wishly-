import React from 'react';

const RegForm4 = () => {
  return (
    <div className="w-1/2">
      <div className="size-custom2 bg-custompurple-500 rounded-4xl p-6 ml-12 mt-32 flex flex-col justify-center">
        <p className="text-custom6 font-bold text-custompurple-200 mt-4 mb-4">
          Поздравляем! <br></br> Вы зарегистрированы!
        </p>
        <p className="text-custom6 font-bold text-custompurple-200 mb-6">
          Для продолжения вам<br></br> нужно{' '}
          <a className="text-customgray-200 font-bold  hover:text-custompurple-200">
            войти
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegForm4;
