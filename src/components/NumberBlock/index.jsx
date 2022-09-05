import React from 'react';

import './style.scss';

const NumberBlock = ({ number, text }) => {
  return (
    <div className="number__block">
      <div className="number">{number}</div>
      <div className="number__decription">{text}</div>
    </div>
  );
};

export default NumberBlock;
