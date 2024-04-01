import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const RegForm2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Пароль');
  const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
    useState('Повторите пароль');

  const handleFocus = (field) => {
    switch (field) {
      case 'email':
        if (email === '') setEmailPlaceholder('');
        break;
      case 'password':
        if (password === '') setPasswordPlaceholder('');
        break;
      case 'confirmPassword':
        if (confirmPassword === '') setConfirmPasswordPlaceholder('');
        break;
      default:
        break;
    }
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'email':
        if (email === '') setEmailPlaceholder('Email');
        break;
      case 'password':
        if (password === '') setPasswordPlaceholder('Пароль');
        break;
      case 'confirmPassword':
        if (confirmPassword === '')
          setConfirmPasswordPlaceholder('Повторите пароль');
        break;
      default:
        break;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-1/2">
      <div className="flex flex-col justify-center">
        <div className="size-custom2 bg-custompurple-500 rounded-4xl p-6 ml-12 mt-32">
          <p className="text-custom5 font-bold text-custompurple-200 mt-6 mb-6">
            Добро пожаловать, @name
          </p>
          <div className="mb-2 pl-6">
            <input
              className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 flex-grow focus:outline-none text-custom3 rounded-2sm focus:text-white px-3 mr-6"
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 pl-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="bg-custompurple-400 placeholder-customgray-200 flex-grow focus:outline-none text-custom3 placeholder-custompurple-500::placeholder rounded-2sm px-3"
              placeholder={passwordPlaceholder}
              value={password}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" mt-5 ml-2" onClick={toggleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="mb-8 pl-6">
            <input
              type={showPassword ? 'text' : 'password'}
              className="text-customgray-200 bg-custompurple-400 placeholder-customgray-200 flex-grow focus:outline-none text-custom3 rounded-2sm focus:text-white px-3 mr-6"
              placeholder={confirmPasswordPlaceholder}
              value={confirmPassword}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={() => handleBlur('confirmPassword')}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="rounded-4xl bg-custompurple-100 py-2 px-8 text-custom2 font-bold text-customgray-100 
          opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl hover:bg-custompurple-400 
          focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50 mb-4"
          >
            Зарегистрироваться
          </button>
          <div className="flex justify-center">
            <div className="bg-customgray-100 h-1 w-4/5 rounded-4xl mb-4"></div>
          </div>
          <div className="flex justify-center">
            <p className="mr-1 text-custom13 ">
              Регистрируясь, вы соглашаетесь с Условиями обслуживания, и
              Политикой конфиденциальности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm2;
