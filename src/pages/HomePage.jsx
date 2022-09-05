import React from 'react';

import Products from './../components/Products';

const HomePage = ({ products, handleCartItems }) => {
  return <Products products={products} handleCartItems={handleCartItems} />;
};

export default HomePage;
