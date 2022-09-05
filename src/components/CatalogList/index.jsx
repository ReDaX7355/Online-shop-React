import React from 'react';

import './style.scss';

const CatalogList = ({ title, list = [] }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="catalog-list">
      <h4 className="catalog-list__title">{title}</h4>
      <ul className="catalog__list">
        {list.length > 0 &&
          list.map((item, i) => (
            <li key={i} className="catalog__item">
              <a href="#" className="catalog__link">
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CatalogList;
