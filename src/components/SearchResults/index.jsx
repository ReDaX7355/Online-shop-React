import React from 'react';

import ProductItem from './../Products/ProductItem';

import './style.scss';

const SearchResults = ({ products = [] }) => {
  const lengthProducts = products.length.toString();
  const lastNumOfLength = Number(lengthProducts[lengthProducts.length - 1]);
  let productWord = '';

  if (lastNumOfLength == 1) {
    productWord = 'товар';
  } else if (lastNumOfLength > 1 && lastNumOfLength < 5) {
    productWord = 'товара';
  } else {
    productWord = 'товаров';
  }

  return (
    <div className="search-results">
      <h3>
        По вашему запросу нашлось {products.length} {productWord}.
      </h3>
      <div className="searched-products">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
