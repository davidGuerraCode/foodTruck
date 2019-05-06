import React from 'react';
import style from './input.module.css';

const input = props => {
  const { elementType, elementConf, value, changeHandler } = props;
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = <input {...elementConf} value={value} onChange={changeHandler} />;
      break;

    case 'textarea':
      inputElement = <textarea {...elementConf} value={value} onChange={changeHandler} />;
      break;

    case 'select':
      inputElement = (
        <select value={value} onChange={changeHandler}>
          {elementConf.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = <input {...elementConf} value={value} onChange={changeHandler} />;
      break;
  }

  return (
    <div className={style.input}>
      {inputElement}
      <span className={style.iconContainer}>
        <i className={props.icon} />
      </span>
    </div>
  );
};

export default input;
