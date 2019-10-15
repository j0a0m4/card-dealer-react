import React from 'react';
import '../../styles/Card.css';

function Card({ image, value, suit, translate }) {
  return (
    <img
      style={{ transform: translate }}
      className="Card"
      src={image}
      alt={`${value} of ${suit} card`}
    />
  );
}

export default Card;
