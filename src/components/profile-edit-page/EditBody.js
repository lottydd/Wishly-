import React, { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import EditProfileForm from './EditProfileForm';
import standartImage from './blankprofilebackground.png';
import './EditBody.css';

const EditBody = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  // Загрузка изображения
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="EditBody flex  justify-center  ">
      <div className="bg-customgray-100 w-118 h-118 rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl rounded-br-4xl relative">
        <div
          className="w-118 h-111 rounded-tl-4xl rounded-tr-4xl"
          style={{
            backgroundImage: `url(${uploadedImage || standartImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <label htmlFor="upload-button" className=" cursor-pointer">
            <div className=" p-4  w-10    ">
              <LuImagePlus className="h-10 w-10 border-custompurple-500 p-1 text-customgray-100 bg-custompurple-100 rounded-2sm" />
            </div>
          </label>
          <input
            type="file"
            id="upload-button"
            accept="image/*"
            className="hidden "
            onChange={handleImageUpload}
          />
        </div>
        <div className="-mt-20">
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};

export default EditBody;
