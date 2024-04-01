import React from 'react';
import screenshot from './wishlistscreenshot2.png';
import vector from './vector.png';
const RegShow = () => {
  return (
    <div>
      <div className="ml-48">
        <a className="flex items-center text-custom2 font-bold text-custompurple-500 mb-8 ">
          <img
            className="rounded-4xl mr-2"
            src={vector}
            height={30}
            width={20}
            alt="Vector Image"
          />
          <span>Вернуться назад</span>
        </a>
      </div>
      <div className="ml-56">
        <p className="text-custom5 font-bold text-left leading-tight mb-4">
          Платформа для создания <br></br> вишлистов
        </p>
        <p className="text-custom4 text-left  font-semibold leading-tight ">
          Превратите мысли в действия с <br></br> нашей платформой для создания{' '}
          <br></br> вишлистов: начните сейчас!
        </p>
      </div>
      <div className="ml-52 mt-8">
        <img
          className="rounded-4xl"
          src={screenshot}
          height={711}
          width={493}
        />
      </div>
    </div>
  );
};

export default RegShow;
