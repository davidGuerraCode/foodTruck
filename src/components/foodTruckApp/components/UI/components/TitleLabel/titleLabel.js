import React from 'react';
import style from './titleLabel.module.css';

const titleLabel = props => {
  const { children } = props;

  return (
    <div className={style.cardTitle}>
      <p>{children}</p>
      <svg height="3" width="50">
        <line x1="15" y1="0" x2="30" y2="0" />
      </svg>
    </div>
  );
};

export default titleLabel;
