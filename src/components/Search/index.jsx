import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const hundleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) {
      return;
    }
    navigate({
      pathname: 'search',
      search: createSearchParams({
        foo: searchInput,
      }).toString(),
    });
    setSearchInput('');
  };

  const clickButtonSearch = () => {
    document.querySelector('.search > form > input[type="submit"]').click();
  };

  return (
    <div className="search">
      <form onSubmit={(e) => searchSubmit(e)}>
        <input
          onChange={hundleSearchInput}
          value={searchInput}
          className="search__input"
          type="text"
          placeholder="Поиск"
        />
        <input type="submit" value="" />
      </form>
      <FontAwesomeIcon
        onClick={() => clickButtonSearch()}
        icon={faMagnifyingGlass}
      />
    </div>
  );
};

export default Search;
