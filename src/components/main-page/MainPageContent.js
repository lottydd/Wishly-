import React, { useState } from 'react';
import './MainPage.css';

const MainPageContent = () => {
  const [openTab, setOpenTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className="MainPageContent flex justify-center items-center h-full">
      <div className="max-w-md mx-auto relative pl-4">
        {' '}
        {/* Добавлено pl-4 для отступа слева */}
        <div className="flex">
          <button
            className={`py-2 px-4 text-custom2 font-bold relative focus:outline-none ${
              openTab === 1
                ? 'text-customgray-200'
                : 'text-custompurple-400 hover:text-custompurple-300'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Желаемое
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-transparent ${
                openTab === 1 ? 'bg-customgray-200' : 'bg-custompurple-400'
              }`}
            />
          </button>
          <button
            className={`py-2 px-4 text-custom2 font-bold relative focus:outline-none ${
              openTab === 2
                ? 'text-customgray-200'
                : 'text-custompurple-400 hover:text-custompurple-300'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Вишлисты
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-transparent ${
                openTab === 2 ? 'bg-customgray-200' : 'bg-custompurple-400'
              }`}
            />
          </button>
          <button
            className={`py-2 px-4 text-custom2 font-bold relative focus:outline-none ${
              openTab === 3
                ? 'text-customgray-200'
                : 'text-custompurple-400 hover:text-custompurple-300'
            }`}
            onClick={() => handleTabClick(3)}
          >
            Предложенное
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-transparent ${
                openTab === 3 ? 'bg-customgray-200' : 'bg-custompurple-400'
              }`}
            />
          </button>
        </div>
        <div className="mt-4">
          {openTab === 1 && <div>Content for Tab 1</div>}
          {openTab === 2 && <div>Content for Tab 2</div>}
          {openTab === 3 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
