import React, { useState } from 'react';
import { FaFileImage } from 'react-icons/fa';
import placeholderImage from './placeholder.jpg'; // Импортируем изображение-заглушку
import arrowUpImg from './arrowUp.png';
import arrowDownImg from './arrowDown.png';

function AddProductForm({ onAddProduct }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [productLink, setProductLink] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedList, setSelectedList] = useState(''); // Добавляем состояние для выбранного списка

  const incrementQuantity = () => {
    setProductQuantity((prevQuantity) => Math.max(prevQuantity + 1, 1));
  };

  const decrementQuantity = () => {
    setProductQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Регулярное выражение для проверки наличия только цифр
    const regex = /^[0-9]*$/;
    // Если введенное значение соответствует регулярному выражению, обновляем состояние
    if (regex.test(input)) {
      setProductPrice(input);
    }
  };

  const handleAddProduct = () => {
    const newProduct = {
      image: uploadedImage,
      link: productLink,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      description: productDescription,
      list: selectedList, // Используем выбранный список
    };
    onAddProduct(newProduct);
    // Очистка полей формы после добавления товара
    setUploadedImage(null);
    setProductLink('');
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setProductDescription('');
    setSelectedList('wishlist'); // Сбрасываем выбранный список обратно в 'wishlist'
  };

  return (
    <div className=" flex justify-center">
      <div className="w-116 h-116 bg-custompurple-500 px-121px rounded-4xl border border-customgray-100">
        <div className="text-custompurple-200 font-bold mb-4 text-custom7 ">
          Создать новый подарок
        </div>

        <div className="w-53 h-53 mb-4 flex items-center justify-center">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-3sm "
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
            Ссылка
          </div>
          <input
            type="text"
            id="productLink"
            placeholder="Введите ссылку на подарок"
            className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-full focus:outline-none text-custom13 rounded-2sm py-3 px-6"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Введите ссылку на подарок')}
          />
        </div>
        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Название подарка
          </div>
          <input
            type="text"
            id="productName"
            placeholder="Введите название подарка"
            className=" text-customgray-200 placeholder-customgray-200
            bg-custompurple-400 w-full focus:outline-none 
              text-custom13 rounded-2sm py-3 px-6"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Введите название подарка')}
          />
        </div>
        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Цена
          </div>
          <div className="flex items-center rounded-2sm ">
            <div className="bg-custompurple-300 py-2 px-6  text-custom2 font-medium text-customgray-100 rounded-3xl mr-2">
              RUB
            </div>
            <input
              type="text"
              id="productPrice"
              placeholder="Цена подарка"
              className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-full focus:outline-none text-custom13 rounded-2sm py-3 pl-6"
              value={productPrice}
              onChange={handleInputChange}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Цена подарка')}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="text-customgray-200 mb-1 text-custom5 text-left font-medium">
            Количество
          </div>
          <div className="flex items-center bg-custompurple-400 rounded-3xl w-24">
            <input
              type="text"
              id="productQuantity"
              placeholder="Введите количество подарков"
              className="text-customgray-200 placeholder-customgray-200 bg-custompurple-400 w-16 focus:outline-none text-custom7 rounded-l-2sm pl-6 pr-4"
              value={productQuantity}
              readOnly
            />
            <div className="flex flex-col pr-2 ">
              <button
                className="bg-custompurple-400 text-custom2 font-bold text-customgray-100 rounded-full  mt-2 h-10"
                onClick={incrementQuantity}
              >
                <img src={arrowUpImg} alt="Стрелка вверх" />
              </button>
              <button
                className="bg-custompurple-400 text-custom2 font-bold text-customgray-100 rounded-full h-10"
                onClick={decrementQuantity}
              >
                <img src={arrowDownImg} alt="Стрелка вниз" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Добавьте описание подарка
          </div>
          <textarea
            className="text-customgray-200 placeholder-customgray-200
             bg-custompurple-400 w-full focus:outline-none 
             text-custom13 rounded-2sm py-3 px-6 resize-none"
            placeholder="Введите описания подарка"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) =>
              e.target.value
                ? (e.target.placeholder = '')
                : (e.target.placeholder = 'Введите описание подарка')
            }
          />
        </div>

        <div className="mb-4">
          <div className="text-customgray-200 mb-1 block text-custom5 text-left font-medium">
            Выберите список
          </div>
          <select
            className="text-customgray-200 bg-custompurple-400 w-full 
            focus:outline-none text-custom13 rounded-2sm py-3 px-6"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
          >
            <option value="wishlist">Желаемое</option>
            <option value="new_year">Новый год</option>
          </select>
        </div>
        <button
          className="rounded-3xl bg-custompurple-100 py-3 px-4 text-custom4 font-bold text-customgray-100 
        opacity-100 transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
        hover:bg-custompurple-400 focus:outline-none focus:ring-2
        focus:ring-custompurple-300 focus:ring-opacity-50 mb-8 block "
          onClick={handleAddProduct}
        >
          Добавить подарок
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
