import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';

import ShopContext from '../../../context/ShopContext';

import './style.scss';

const ProductItem = ({ item }) => {
  const { addToCart } = useContext(ShopContext);

  const sale = Math.floor(
    100 - (parseInt(item.sale) / parseInt(item.price)) * 100
  );

  const addInCart = (e) => {
    e.preventDefault();
    addToCart(item);
  };

  return (
    <Link to={'/' + item.category + '/' + item.id}>
      <div className="product-item">
        {item.new && <div className="status__product">Новинка</div>}
        {item.sale && <div className="status__sale">-{sale}%</div>}
        <div className="product__image">
          <img src={item.img} />
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
          <div className="product__add" onClick={(e) => addInCart(e)}>
            <FaCartArrowDown size={'1.2em'} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
