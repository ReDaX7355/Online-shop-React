import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loyaut from './components/Loyaut';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import PersonalPage from './pages/PersonalPage';
import SearchPage from './pages/SearchPage';
import RegistrationPage from './pages/RegistrationPage';

import './style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="user/:login" element={<PersonalPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
