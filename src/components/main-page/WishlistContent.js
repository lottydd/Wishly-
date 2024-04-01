// WishlistContent.js
import React, { useState } from 'react';
import AddProductPopup from './AddProductPopup'; // Путь к компоненту добавления товара

const WishlistContent = () => {
  const [isAddProductOpen, setAddProductOpen] = useState(false);

  const handleAddProductClick = () => {
    setAddProductOpen(true);
  };

  return (
    <div>
      <div className="section-header">
        <h3>Списки</h3>
        <button onClick={handleAddProductClick}>Добавить</button>
      </div>
      {/* Здесь может быть список списков */}
      <div className="section-header">
        <h3>Желаемое</h3>
        <button onClick={handleAddProductClick}>Добавить</button>
      </div>
      {/* Здесь может быть список товаров */}

      {isAddProductOpen && (
        <AddProductPopup onClose={() => setAddProductOpen(false)} />
      )}
    </div>
  );
};

export default WishlistContent;
