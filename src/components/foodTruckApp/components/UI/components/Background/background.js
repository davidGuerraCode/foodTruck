import React from 'react';
import style from './background.module.css';

const background = props => {
  return (
    <div className={style.container}>
      <div className={style.bg} />
    </div>
  );
};

export default background;
