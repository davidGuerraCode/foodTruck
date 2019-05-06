import React from 'react';
const input = props => {
  const { elementType, elementConf, value, changed } = props;
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = <input {...elementConf} value={value} onChange={changed} />;
      break;

    case 'textarea':
      inputElement = <textarea {...elementConf} value={value} onChange={changed} />;
      break;

    default:
      inputElement = <input {...elementConf} value={value} onChange={changed} />;
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
