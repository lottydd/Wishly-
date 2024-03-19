import React from 'react';
import Header from './Header'; // Импортируем компонент Header из соответствующего файла
import Introduction from './Introduction'; // Импортируем компонент Introduction из соответствующего файла
import Preferences from './Preferences'; // Импортируем компонент Preferences из соответствующего файла
import JoinToday from './JoinToday'; // Импортируем компонент JoinToday из соответствующего файла
import Footer from './Footer'; // Импортируем компонент Footer из соответствующего файла

const LandingPage = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('bgphoto.png')]">
        <Header />
        <Introduction />
      </div>
      <div>
        <Preferences />
        <JoinToday />
        <div className="h-1.5 bg-customgray-100"></div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
