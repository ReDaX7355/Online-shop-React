import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const ProductItem = ({ item, handleCartItems }) => {
  
  const sale = Math.floor(
    100 - (parseInt(item.sale) / parseInt(item.price)) * 100
  );

  return (
    <div className="product-item">
      {item.new && <div className="status__product">Новинка</div>}
      {item.sale && <div className="status__sale">-{sale}%</div>}
      <div className="product__image">
        <img src="#" />
      </div>
      <div className="product__title">{item.title}</div>
      <div className="product__footer">
        <div className="product__price">
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
            <div className="product__price-value">{item.price} руб.</div>
          )}
        </div>
        <div className="product__add" onClick={() => handleCartItems(item)}>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
