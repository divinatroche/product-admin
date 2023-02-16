import './App.css';
import ProductForm from './components/ProductForm';
import Product from './components/Product';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='newproduct' element={<ProductForm/>}></Route>
        <Route path='allproducts' element={<ProductList/>}></Route>
        <Route path='/getProduct/:id' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
