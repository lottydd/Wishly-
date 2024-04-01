import React, { useState } from 'react';
import { FaFileImage } from 'react-icons/fa';
import placeholderImage from './userblankprofile.png'; // Импортируем изображение-заглушку
import { LuImagePlus } from 'react-icons/lu';

function EditProfileForm({ onSaveProfile }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [username, setUsername] = useState('');
  const [profileDescription, setProfileDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileName, setProfileName] = useState(''); // Изменили с productName на profileName

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
  };

  const handleSaveProfile = () => {
    const updatedProfile = {
      image: uploadedImage,
      username: username,
      description: profileDescription,
      password: password,
      confirmPassword: confirmPassword,
      profileName: profileName, // Теперь используется profileName вместо productName
    };
    onSaveProfile(updatedProfile);
    // Очистка полей формы после сохранения профиля
    setUploadedImage(null);
    setUsername('');
    setProfileDescription('');
    setPassword('');
    setConfirmPassword('');
    setProfileName(''); // Сброс значения profileName после сохранения профиля
  };

  return (
    <div className="flex justify-center ">
      <div className="w-116 h-112 bg-custompurple-500 px-121px rounded-4xl  border border-customgray-100 ">
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="w-53 h-53 mb-4  ">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full  h-full object-cover rounded-6xl"
              />
            ) : (
              <img
                src={placeholderImage} // Используем изображение-заглушку
                alt="Placeholder"
                className="w-full h-full object-cover rounded-6xl"
              />
            )}
          </div>
          <label
            htmlFor="imageUpload"
            className="block rounded-4xl bg-custompurple-100 py-3 w-60  
          text-custom2 font-medium text-customgray-100 
          opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
          hover:bg-custompurple-400 focus:outline-none focus:ring-2
          focus:ring-custompurple-300 focus:ring-opacity-50 mb-5"
          >
            <LuImagePlus className="inline-block mr-2 mb-1" />
            Загрузить аватар
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <div>
          <p className="text-customgray-200 text-custom4 mb-3 font-semibold text-left">
            Изменить ваш никнейм:
          </p>
          <div className="flex items-center w-full bg-custompurple-400 rounded-2sm mb-3 py-1 px-2">
            <span className="text-customgray-200 ml-3 bg-custompurple-400 text-custom3">
              wishly.ru/
            </span>
            <input
              className="text-customgray-200 bg-custompurple-400 flex-grow focus:outline-none text-custom3 rounded-2sm"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="mb-4">
            <div className="text-customgray-200 mb-1 block text-custom4 text-left font-medium">
              Изменить имя профиля
            </div>
            <input
              type="text"
              id="profileName"
              placeholder="Введите название профиля"
              className=" text-customgray-200 placeholder-customgray-200
            bg-custompurple-400 w-full focus:outline-none 
              text-custom13 rounded-2sm py-3 px-6"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) =>
                (e.target.placeholder = 'Введите название профиля')
              }
            />
          </div>

          <div className="mb-3">
            <div className="text-customgray-200 mb-1 block text-custom4 text-left font-medium">
              Добавьте описание профиля
            </div>
            <textarea
              className="text-customgray-200 placeholder-customgray-200
            bg-custompurple-400 w-full focus:outline-none 
            text-custom13 rounded-2sm py-3 px-6 resize-none"
              placeholder="Введите описание профиля"
              value={profileDescription}
              onChange={(e) => setProfileDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="text-customgray-200 mb-1 block text-custom4 text-left font-medium">
              Изменить пароль
            </div>
            <input
              type="password"
              placeholder="Новый пароль"
              className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-full focus:outline-none text-custom13 rounded-2sm py-3 px-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Повторите пароль"
              className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-full focus:outline-none text-custom13 rounded-2sm py-3 px-6 mt-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="rounded-3xl bg-custompurple-100 py-3 px-4 text-custom2 font-bold text-customgray-100 
          opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
          hover:bg-custompurple-400 focus:outline-none focus:ring-2
          focus:ring-custompurple-300 focus:ring-opacity-50 mb-8 block ml-36"
            onClick={handleSaveProfile}
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
