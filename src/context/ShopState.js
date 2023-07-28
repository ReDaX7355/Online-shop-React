import React, { useEffect, useReducer } from 'react';

import Reduser from './reduser';
import defaultState from './defaultState';
import ShopContext from './ShopContext';
import types from './types';
import users from '../data/users';
import products from '../data/products';

const ShopState = ({ children }) => {
  const [state, dispatch] = useReducer(Reduser, defaultState);

  const addToCart = (item) => {
    dispatch({ type: types.ADD_CART_ITEM, payload: item });
  };

  const changeCart = (items) => {
    dispatch({ type: types.CHANGE_CART, payload: items });
  };

  const deleteFromCart = (id) => {
    dispatch({ type: types.DELETE_CART_ITEM, payload: id });
  };

  const registration = (login, email, password) => {
    users.push({ login, email, password });
  };

  const loginUser = (login) => {
    dispatch({ type: types.SIGN_IN, payload: login });
    window.localStorage.setItem('auth', true);
    window.localStorage.setItem('currentUser', login);
  };

  const signOut = () => {
    dispatch({ type: types.SIGN_OUT });
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('currentUser');
  };

  const value = {
    state,
    dispatch,
    addToCart,
    changeCart,
    deleteFromCart,
    registration,
    loginUser,
    signOut,
  };

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    const currentUser = window.localStorage.getItem('currentUser');
    if (auth && currentUser) {
      dispatch({ type: types.SIGN_IN, payload: currentUser });
    }
  }, []);

  // useEffect(() => {
  //   dispatch({ type: types.LOAD_PRODUCTS, payload: products });
  // }, [])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopState;
