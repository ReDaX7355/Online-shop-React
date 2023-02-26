import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";
import ShopContext from "../../../context/ShopContext";

const CartItem = ({ item }) => {
  const { deleteFromCart } = useContext(ShopContext);

  return (
    <div className='cart-item'>
      <div className='cart__left__block'>
        <img src={item.img} className='cart__image' />
        <div className='cart__description'>
          <div className='cart__title'>{item.title}</div>
          {item.sale ? (
            <>
              <div className='product__sale-value'>{item.price} руб.</div>
              <div
                className={
                  item.sale
                    ? "product__price-value highlight"
                    : "product__price-value"
                }
              >
                {item.sale} руб.
              </div>
            </>
          ) : (
            <div className='product__price-value'>{item.price} руб.</div>
          )}
        </div>
      </div>
      <div className='cart__rigth__block'>
        <div
          className='cart__delete'
          onClick={() => deleteFromCart(item.id)}
          title='Удалить'
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
