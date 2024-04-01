import React, { useState } from 'react';
import Modal from './Modal';
import AddProductForm from './AddProductForm'; // Импортируем компонент AddProductForm

const Testcomp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    console.log('Добавлен новый продукт:', newProduct);
    // Ваша логика добавления продукта
  };

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      {/* Модальное окно с формой добавления продукта */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProductForm onAddProduct={handleAddProduct} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Testcomp;
