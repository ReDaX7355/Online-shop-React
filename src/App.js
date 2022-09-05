import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loyaut from './components/Loyaut';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import PersonalPage from './pages/PersonalPage';

import './style.scss';

const products = [
  {
    id: 1,
    title: 'Смартфон Samsung Galaxy S21 128GB Black',
    price: '74990',
    sale: '67990',
    new: false,
  },
  {
    id: 2,
    title: 'Смартфон Samsung Galaxy S21 256GB Black',
    price: '79990',
    sale: '',
    new: true,
  },
  {
    id: 3,
    title: 'Смартфон Xiaomi MI 10T 8+128GB Black',
    price: '35990',
    sale: '29990',
    new: false,
  },
  {
    id: 4,
    title: 'Смартфон Nokia 3.4',
    price: '20990',
    sale: '',
    new: false,
  },
  {
    id: 5,
    title: 'Смартфон Xiaomi Redmi 9 8+128GB Black',
    price: '47990',
    sale: '25990',
    new: false,
  },
  {
    id: 6,
    title: 'Смартфон Iphone X 256GB Black',
    price: '87990',
    sale: '80990',
    new: false,
  },
  {
    id: 7,
    title: 'Смартфон Poco X4 128GB',
    price: '25990',
    sale: '',
    new: false,
  },
  {
    id: 8,
    title: 'Смартфон Samsung A31 Black',
    price: '35990',
    sale: '',
    new: true,
  },
];

export default function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const deleteCartItem = (id) => {
    setCartItems([...cartItems.filter((item) => item.id !== id)]);
  };

  const handleCartItems = (item) => {
    const itemsID = cartItems.map((i) => i.id);
    if (itemsID.includes(item.id)) {
      return;
    }
    setCartItems([...cartItems, { ...item }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyaut cartItems={cartItems} />}>
          <Route
            index
            element={
              <HomePage products={products} handleCartItems={handleCartItems} />
            }
          />
          <Route
            path="cart"
            element={
              <CartPage cartItems={cartItems} deleteCartItem={deleteCartItem} />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<PersonalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
