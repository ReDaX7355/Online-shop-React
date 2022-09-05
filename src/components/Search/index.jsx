import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const Search = () => {
  return (
    <div className="search">
      <input className="search__form" type="text" placeholder="Поиск" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;
