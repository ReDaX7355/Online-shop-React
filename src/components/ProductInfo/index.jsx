import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ShopContext from './../../context/ShopContext';

import './style.scss';

const ProductInfo = () => {
  const { state } = useContext(ShopContext);
  const { id } = useParams();

  const product = state.products.find((item) => item.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-info">
      <div className="product-info__header">
        <h2 className="product-info__title">
          {product.title}
          {product.new && <div className="product-info__status">Новинка</div>}
        </h2>
        <div className="product-info__price-wrapper">
          {product.sale ? (
            <>
              <div className="product-info__sale">{product.price} руб.</div>
              <div
                className={
                  product.sale
                    ? 'product-info__price highlight'
                    : 'product-info__price'
                }
              >
                {product.sale} руб.
              </div>
            </>
          ) : (
            <div className="product-info__price">{product.price} руб.</div>
          )}
        </div>
      </div>
      <div className="product-info__image-wrapper">
        <img className="product-info__image" src={product.img} />
      </div>
      <div className="product-info__features">
            <h3 className="product-info__features-title">Характеристики</h3>
      </div>
    </div>
  );
};

export default ProductInfo;
