/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import style from './Card.module.css';

const card = props => {
  const { children, grow } = props;
  const [classes, setClasses] = useState([style.card]);

  useEffect(() => {
    if (grow) {
      setClasses([...classes, style.Grow]);
    }
  }, [classes, grow]);

  return <div className={classes.join(' ')}>{children}</div>;
};

export default card;
