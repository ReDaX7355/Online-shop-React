import React, {useContext, useReducer} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reduser from "./context/reduser";
import defaultState from "./context/defaultState";


import Loyaut from "./components/Loyaut";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import PersonalPage from "./pages/PersonalPage";

import "./style.scss";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route
            index
            element={
              <HomePage />
            }
          />
          <Route
            path="cart"
            element={
              <CartPage />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<PersonalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
