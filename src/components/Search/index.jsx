import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Search = () => {
  const search = (e) => {
    e.preventDefault();
    console.log("Search");
  };

  return (
    <div className='search'>
      <form onSubmit={(e) => search(e)}>
        <input className='search__form' type='text' placeholder='Поиск' />
      </form>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;
