import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import ShopContext from '../../../context/ShopContext';

import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { state, changeCart, deleteFromCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(item.quantity);

  const moreQuantity = () => {
    setQuantity(() => {
      return quantity + 1;
    });
    changeCountQuantity(quantity + 1);
  };

  const lessQuantity = () => {
    if (quantity == 1) {
      return;
    }
    setQuantity(() => {
      return quantity - 1;
    });
    changeCountQuantity(quantity - 1);
  };

  const changeQuantity = (value) => {
    setQuantity(Number(value));
    changeCountQuantity(Number(value));
  };

  const setStartValue = (value) => {
    if (!value) {
      setQuantity(1);
      changeCountQuantity(1);
    }
  };

  const changeCountQuantity = (count) => {
    const id = item.id;
    const itemIndex = state.cartItems.findIndex((item) => item.id == id);
    const newItem = {
      ...state.cartItems[itemIndex],
      quantity: count,
    };

    const newCart = state.cartItems.slice();
    newCart.splice(itemIndex, 1, newItem);
    changeCart(newCart);
  };

  // useEffect(() => {
  //   setQuantity(item.quantity);
  // }, [state]);

  // const changeCount = (id, trend) => {
  //   if (trend == 'more') {
  //     const itemIndex = state.cartItems.findIndex((item) => item.id == id);
  //     const newItem = {
  //       ...state.cartItems[itemIndex],
  //       quantity: state.cartItems[itemIndex].quantity + 1,
  //     };
  //     const newCart = state.cartItems.slice();
  //     newCart.splice(itemIndex, 1, newItem);
  //     changeCart(newCart);
  //   } else if (trend == 'less') {
  //     const itemIndex = state.cartItems.findIndex((item) => item.id == id);
  //     if (state.cartItems[itemIndex].quantity == 1) {
  //       return;
  //     }
  //     const newItem = {
  //       ...state.cartItems[itemIndex],
  //       quantity: state.cartItems[itemIndex].quantity - 1,
  //     };
  //     const newCart = state.cartItems.slice();
  //     newCart.splice(itemIndex, 1, newItem);
  //     changeCart(newCart);
  //   }
  // };

  return (
    <div className="cart-item">
      <div className="cart__left__block">
        <img src={item.img} className="cart__image" />
        <div className="cart__description">
          <div className="cart__title">{item.title}</div>
          {item.sale ? (
            <>
              <div className="product__sale-value">{item.price} руб.</div>
              <div
                className={
                  item.sale
                    ? 'product__price-value highlight'
                    : 'product__price-value'
                }
              >
                {item.sale} руб.
              </div>
            </>
          ) : (
            <>
              <div className="product__price-value">{item.price} руб.</div>
            </>
          )}
          <div className="product_count-info">
            <button className="button_count" onClick={() => lessQuantity()}>
              <FaMinus />
            </button>
            <span className="product_count">
              Количество:
              <input
                onChange={(e) => changeQuantity(e.target.value)}
                onBlur={(e) => setStartValue(e.target.value)}
                type="text"
                value={quantity ? quantity : ''}
              />
            </span>
            <button className="button_count" onClick={() => moreQuantity()}>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="cart__rigth__block">
        <div
          className="cart__delete"
          onClick={() => deleteFromCart(item.id)}
          title="Удалить"
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
