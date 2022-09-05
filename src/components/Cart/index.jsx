import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import CartItem from './../CartItem';

import './style.scss';

const Cart = ({ cartItems, deleteCartItem }) => {
  const cortTotal = cartItems.reduce(
    (total, item) =>
      item.sale
        ? (total += parseInt(item.sale))
        : (total += parseInt(item.price)),
    0
  );

  return (
    <div className="cart">
      <div className="container">
        <h2>Корзина</h2>
        <div className="cart__list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                deleteCartItem={deleteCartItem}
              />
            ))
          ) : (
            <h4>Ваша корзина пуста</h4>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="cart__footer">
            <div className="cart__total">Итого: {cortTotal} руб.</div>
            <div className="order">Оформить заказ</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
