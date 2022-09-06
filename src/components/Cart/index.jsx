import React, {useContext} from 'react';

import CartItem from './../CartItem';
import ShopContext from '../../context/ShopContext';

import './style.scss';


const Cart = () => {

  const {state} = useContext(ShopContext);

  const cartTotal = state.cartItems.reduce(
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
          {state.cartItems.length > 0 ? (
            state.cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <h4>Ваша корзина пуста</h4>
          )}
        </div>
        {state.cartItems.length > 0 ? (
          <div className="cart__footer">
            <div className="cart__total">Итого: {cartTotal} руб.</div>
            <div className="order">Оформить заказ</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
