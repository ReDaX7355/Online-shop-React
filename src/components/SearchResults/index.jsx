import React from 'react';

import ProductItem from './../Products/ProductItem';

import './style.scss';

const SearchResults = ({ products = [] }) => {
  return (
    <div className="search-results">
      <h3>По вашему запросу нашлось {products.length} товаров.</h3>
      <div className="searched-products">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
