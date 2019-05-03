import React from 'react';
import style from './button.module.css';

const button = props => {
  return (
    <button className={style.btn} {...props}>
      {props.children}
    </button>
  );
};

export default button;
