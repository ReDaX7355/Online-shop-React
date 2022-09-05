import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './../Header';
import Categories from './../Categories';
import Footer from './../Footer';

// import './style.scss';

const Loyaut = ({ cartItems, login }) => {
  return (
    <div className="wrapper">
      <Header cartItems={cartItems} login={login} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Loyaut;
