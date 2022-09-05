import React from 'react';

import './style.scss';

const Categories = () => {
  return (
    <div className="categories">
        <ul className="categories__list">
          <li className="category__item">Смартфоны и планшеты</li>
          <li className="category__item">Ноутбуки, планшеты и компьютеры</li>
          <li className="category__item">Техника для дома</li>
          <li className="category__item">Игры и развлечения</li>
          <li className="category__item">Фото и видеотехника</li>
          <li className="category__item">Телефизоры, Аудио-видео</li>
        </ul>
    </div>
  );
};

export default Categories;
