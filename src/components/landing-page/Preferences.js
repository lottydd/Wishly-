import React from 'react';
import './Preferences.css';

const Preferences = () => {
  return (
    <div className="Preferences bg-cover bg-center bg-[url('bgpreferences.png')] text-custompurple-100">
      <h1 className="text-custom8 text-center mx-auto pt-20 mb-24 font-bold">
        Почему выбирают нас?
      </h1>
      <div className="flex space-x-15px text-customgray-100 justify-center ">
        <div className="size-custom1 bg-custompurple-100 rounded-4xl shadow-xl filter drop-shadow">
          <div className="my-6 mx-2">
            <h3 className="text-custom2 font-semibold text-center leading-tight ">
              Простота использования
            </h3>
            <p className="text-custom1 mx-1 my-2">
              Наш интерфейс дружелюбен и интуитивно понятен даже для новичков.
            </p>
            <p className="text-custom1 mx-1 ">
              Создание вишлистов – это легко и быстро!
            </p>
          </div>
        </div>
        <div className="size-custom1 bg-custompurple-100 rounded-4xl shadow-xl filter drop-shadow">
          <div className="my-6 mx-2">
            <h3 className="text-custom2 font-semibold text-center leading-tight ">
              Удобная <br></br> интеграция
            </h3>
            <p className="text-custom1 mx-1 my-2">
              Вы можете добавлять в вишлисты товары из любых маркетплейсов,
              выбирая из тысяч предложений.
            </p>
          </div>
        </div>
        <div className="size-custom1 bg-custompurple-100 rounded-4xl shadow-xl filter drop-shadow">
          <div className="my-6 mx-2">
            <h3 className="text-custom2 font-semibold text-center leading-tight ">
              Персонализация профиля
            </h3>
            <p className="text-custom1 mx-1 my-2">
              Создайте свой личный профиль, загрузите фотографию и поделитесь с
              друзьями своими интересами и предпочтениями
            </p>
          </div>
        </div>
        <div className="size-custom1 bg-custompurple-100 rounded-4xl shadow-xl filter drop-shadow">
          <div className="my-6 mx-2">
            <h3 className="text-custom2 font-semibold text-center leading-tight ">
              Конфиденциальность
            </h3>
            <p className="text-custom1 mx-1 my-8">
              Мы ценим вашу приватность. Вы можете создавать как публичные, так
              и приватные вишлисты, контролируя доступ к вашим подаркам.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
