import React from 'react';

const Button = ({ text, onClick, esClick }) => {
  const btnClass = esClick ? 'btnClick' : 'btnReiniciar';

  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
