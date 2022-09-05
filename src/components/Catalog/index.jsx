import React from 'react';

import CatalogList from './../CatalogList';

import './style.scss';

const Catalog = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="catalog">
      <button className="catalog-button" onClick={() => setVisible(!visible)}>
        <div className={visible ? 'burger active' : 'burger'}></div>
        <span>Каталог</span>
      </button>
      {visible && (
        <div className="catalog__wrapper" onClick={(f) => f}>
          <div className="catalog__block">
            <CatalogList
              title={'Смартфоны и планшеты'}
              list={[
                'Смартфоны',
                'Аксессуары для смартфонов',
                'Планшеты',
                'Аксессуары для Планшеты',
                'Электронные книги',
              ]}
            />
            <CatalogList
              title={'Смартфоны и планшеты'}
              list={[
                'Смартфоны',
                'Аксессуары для смартфонов',
                'Планшеты',
                'Аксессуары для Планшеты',
                'Электронные книги',
              ]}
            />
            <CatalogList
              title={'Смартфоны и планшеты'}
              list={[
                'Смартфоны',
                'Аксессуары для смартфонов',
                'Планшеты',
                'Аксессуары для Планшеты',
                'Электронные книги',
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
