import React, { useReducer } from 'react';

import Reduser from "./reduser";
import defaultState from "./defaultState";
import ShopContext from './ShopContext';
import types from './types';

const ShopState = ({children}) => {

  const [state, dispatch] = useReducer(Reduser, defaultState);

  const addToCart = (item) => {
    dispatch({type: types.ADD_CART_ITEM, payload: item})
  }

  const deleteFromCart = (id) => {
    dispatch({type: types.DELETE_CART_ITEM, payload: id})
  }

  return (
    <ShopContext.Provider value={{state, addToCart, deleteFromCart}}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopState;
