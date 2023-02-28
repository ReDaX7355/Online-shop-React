import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import ShopContext from './../context/ShopContext';
import SearchResults from './../components/SearchResults';

const SearchPage = () => {
  const { state } = useContext(ShopContext);
  const [search, setSearch] = useSearchParams();

  const searchedProducts = state.products.filter((item) =>
    item.title.toLowerCase().includes(search.get('foo').toLowerCase())
  );

  return (
    <div className="personal-page">
      <div className="container">
        <h2 className="personal__title">Поиск</h2>
        <SearchResults products={searchedProducts} />
      </div>
    </div>
  );
};

export default SearchPage;
