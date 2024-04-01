import './App.css';
import AddListForm from './components/main-page/AddListForm';
import AddProductForm from './components/main-page/AddProductForm';
import MainPage from './components/main-page/MainPage';
import ProductCard from './components/main-page/ProductCard';
import EditProfilePage from './components/profile-edit-page/EditProfilePage';

function App() {
  return (
    <>
      <div className="App relative">
        <ProductCard />
      </div>
    </>
  );
}

export default App;
