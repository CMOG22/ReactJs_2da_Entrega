import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
        import { Derechos } from './Pie/Derechos/Derechos';

import { createProducts } from '../firebase/firebase.js'
export const App = () => {
  //createProducts ()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Derechos />
      </BrowserRouter>

    </>

  )
}