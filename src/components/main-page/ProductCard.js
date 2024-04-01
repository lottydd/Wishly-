import React from 'react';
import { FaTrash } from 'react-icons/fa';
import defaultProductImage from './defaultprodphoto.jpg';

import { BsPencilFill } from 'react-icons/bs';
import { BiSolidTrashAlt } from 'react-icons/bi';

const ProductCard = ({ product }) => {
  return (
    <div className="h-80 w-49 bg-custompurple-400 rounded-3xl">
      <div className="w-49 h-49">
        <img
          src={product.image || defaultProductImage}
          alt={product.name || 'Placeholder'}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>
      <div className="w-49 h-49 flex flex-col justify-between p-1 ">
        <div className="text-left text-customgray-200 ">
          <p className="text-custom1 font-semibold ">
            {product.name || 'Название'}
          </p>
          <p className="text-custom0">{product.description || 'Описание'}</p>
          <p className="text-custom1_5 font-semibold">
            {product.price || 'Цена'}
          </p>
        </div>
        <div className="flex cl">
          <div className="bg-custompurple-300 h-5 w-5 rounded-2sm mr-1">
            <button>
              <BsPencilFill className="text-customgray-100  hover:text-customgray-100 h-4 w-4  " />
            </button>
          </div>
          <div className="bg-custompurple-300 h-5 w-5 rounded-2sm">
            <button>
              <BiSolidTrashAlt className="text-customgray-100  hover:text-customgray-100  h-5 w-5   " />
            </button>
          </div>
        </div>
        <div className="ml-8 my-2">
          <button
            className="rounded-3xl bg-custompurple-300 py-1 px-3 text-custom1 font-bold text-customgray-100 opacity-100
              transition-opacity duration-200 ease-in-out shadow-lg hover:shadow-2xl
            hover:bg-custompurple-400 focus:outline-none focus:ring-2 focus:ring-custompurple-300 focus:ring-opacity-50"
          >
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
