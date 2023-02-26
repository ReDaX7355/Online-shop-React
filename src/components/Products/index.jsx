import React, { useContext, useEffect, useState } from "react";

import ShopContext from "./../../context/ShopContext";
import ProductItem from "./ProductItem";
import Categories from "./../Categories";
import products from "./../../data/products";

import "./style.scss";
import types from "../../context/types";

const Products = () => {
  const { state, dispatch } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: types.LOAD_PRODUCTS, payload: products });
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className='products'>
      <div className='container'>
        <Categories />
        <h2>Список товаров</h2>
        <div className='products__items'>
          {loading ? (
            <h1>Загрузка...</h1>
          ) : (
            state.products.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
