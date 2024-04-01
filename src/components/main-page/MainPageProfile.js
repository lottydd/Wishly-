import React from 'react';
import './MainPage.css';
import standartProfileImage from './blankprofilebackground.png'; // Стандартное изображение профиля
import placeholderImage from './userblankprofile.png'; // Изображение-заглушка

const MainPageProfile = ({
  profileImage,
  uploadedImage,
  profileName = 'Kendry',
  profileNickname = 'goldenfarwell',
}) => {
  const displayedProfileImage = profileImage || standartProfileImage;

  return (
    <div className="MainPageProfile flex-col">
      <div
        className="w-full h-111 "
        style={{
          backgroundImage: `url(${displayedProfileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="w-full h-53 flex justify-center items-center -mt-44 ">
        <div className="w-65 h-65">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-6x"
            />
          ) : (
            <img
              src={placeholderImage}
              alt="Placeholder"
              className="w-full h-full object-cover rounded-6xl border-4 border-customgray-100"
            />
          )}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-custom8 text-customgray-200 font-bold">
          {profileName}
        </h1>
        <p className="text-custom2 text-custompurple-500">@{profileNickname}</p>
      </div>
    </div>
  );
};

export default MainPageProfile;
