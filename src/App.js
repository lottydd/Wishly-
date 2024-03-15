import './App.css';
import Header from './components/landing-page/Header';
import Introduction from './components/landing-page/Introduction';
import Preferences from './components/landing-page/Preferences';
import Footer from './components/landing-page/Footer';

function App() {
  return (
    <>
      <div className="App relative">
        <div class="bg-cover bg-center bg-[url('bgphoto.jpg')]">
          <Header />
          <Introduction />
        </div>
        <div className="absolute inset-0 bg-custompurple-200/50"></div>
      </div>
      <div>
        <Preferences />
        <Footer />
      </div>
    </>
  );
}

export default App;
