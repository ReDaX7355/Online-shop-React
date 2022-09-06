import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Search from './../Search';
import Catalog from './../Catalog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import ShopContext from '../../context/ShopContext';

const Header = () => {

  const {state} = useContext(ShopContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="logo">
            Shop
          </Link>
          <Catalog />
          <Search />
          <Link to="cart" className="cart__icon">
            <FontAwesomeIcon icon={faCartShopping} />
            {state.cartItems.length > 0 ? (
              <span className="cart__items-count">{state.cartItems.length}</span>
            ) : null}
          </Link>
          <Link to="login" className="user__icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
