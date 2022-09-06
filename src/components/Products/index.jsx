import React, {useContext, useReducer} from 'react';

import ShopContext from "./../../context/ShopContext";
import ProductItem from './../ProductItem';
import Categories from './../Categories';

import './style.scss';

const Products = () => {

  const {state} = useContext(ShopContext);

  return (
    <div className="products">
      <div className="container">
        <Categories />
        <h2>Список товаров</h2>
        <div className="products__items">
          {state.products.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
