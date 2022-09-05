import React from 'react';

import ProductItem from './../ProductItem';
import Categories from './../Categories';

import './style.scss';

const Products = ({ products, handleCartItems }) => {
  return (
    <div className="products">
      <div className="container">
        <Categories />
        <h2>Список товаров</h2>
        <div className="products__items">
          {products.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              handleCartItems={handleCartItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
