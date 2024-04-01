import React, { useState } from 'react';
import { FaFileImage } from 'react-icons/fa';
import placeholderImage from './placeholder.jpg'; // Импортируем изображение-заглушку

function AddListForm({ onSaveList }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [listName, setListName] = useState('');
  const [listType, setListType] = useState('public');
  const [listDescription, setListDescription] = useState('');
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
  };

  const handleSaveList = () => {
    const newList = {
      image: uploadedImage,
      name: listName,
      type: listType,
      description: listDescription,
    };
    onSaveList(newList);
    // Очистка полей формы после сохранения списка
    setUploadedImage(null);
    setListName('');
    setListType('public');
    setListDescription('');
  };

  return (
    <div className="flex justify-center">
      <div className="w-116 h-112 bg-custompurple-500 px-121px rounded-4xl border border-customgray-100">
        <div className="text-custompurple-200 font-bold mb-4 text-custom7">
          Создать новый список
        </div>

        <div className="w-53 h-53 mb-4 flex items-center justify-center">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-3sm"
            />
          ) : (
            <img
              src={placeholderImage} // Используем изображение-заглушку
              alt="Placeholder"
              className="w-full h-full object-cover rounded-3sm"
            />
          )}
        </div>
        <label
          htmlFor="imageUpload"
          className="block rounded-4xl bg-custompurple-100 py-3 w-56  
          text-custom2 font-medium text-customgray-100 
          opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
          hover:bg-custompurple-400 focus:outline-none focus:ring-2
          focus:ring-custompurple-300 focus:ring-opacity-50 mb-5"
        >
          <FaFileImage className="inline-block mr-2" />
          Загрузить фото
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />

        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Назовите список
          </div>
          <input
            type="text"
            id="listName"
            placeholder="Введите название списка"
            className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-full focus:outline-none text-custom13 rounded-2sm py-3 px-6"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Введите название списка')}
          />
        </div>

        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Выберите тип списка
          </div>
          <select
            className="text-customgray-200 bg-custompurple-400 w-full 
            focus:outline-none text-custom13 rounded-2sm py-3 px-6"
            value={listType}
            onChange={(e) => setListType(e.target.value)}
          >
            <option value="public">Публичный</option>
            <option value="private">Приватный</option>
          </select>
        </div>

        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Добавьте описание списка
          </div>
          <textarea
            className="text-customgray-200 placeholder-customgray-200
            bg-custompurple-400 w-full focus:outline-none 
            text-custom13 rounded-2sm py-3 px-6 resize-none"
            placeholder={!descriptionFocused && 'Введите описание списка'}
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}
            onFocus={() => setDescriptionFocused(true)}
            onBlur={() => {
              if (!listDescription) setDescriptionFocused(false);
            }}
          />
        </div>

        <button
          className="rounded-3xl bg-custompurple-100 py-3 px-4 text-custom4 font-bold text-customgray-100 
          opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
          hover:bg-custompurple-400 focus:outline-none focus:ring-2
          focus:ring-custompurple-300 focus:ring-opacity-50 mb-8 block"
          onClick={handleSaveList}
        >
          Сохранить список
        </button>
      </div>
    </div>
  );
}

export default AddListForm;
