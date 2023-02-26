import React from 'react';

import './style.scss';

const FooterMenuItem = ({ title, textLinks = [] }) => {
  return (
    <div className="footer__menu-item">
      <div className="footer__menu-title">{title}</div>
      <ul className="footer__menu-list">
        {textLinks.length > 0 &&
          textLinks.map((text, i) => (
            <li key={i} className="menu__item">
              <a href="#" className="footer__menu-link">
                {text}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterMenuItem;
