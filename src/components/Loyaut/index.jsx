import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

import ShopState from './../../context/ShopState';
import Header from './../Header';
import Footer from './../Footer';


const Loyaut = () => {

  return (
    <ShopState>
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
    </ShopState>
  );
};

export default Loyaut;
