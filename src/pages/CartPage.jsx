import React from 'react';

import Cart from './../components/Cart';

const CartPage = ({ cartItems, deleteCartItem }) => {
  return <Cart cartItems={cartItems} deleteCartItem={deleteCartItem} />;
};

export default CartPage;
