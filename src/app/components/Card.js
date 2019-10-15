import React from 'react';
import '../../styles/Card.css';

function Card({ image, value, suit, transform }) {
  return (
    <img
      style={{ transform }}
      className="Card"
      src={image}
      alt={`${value} of ${suit} card`}
    />
  );
}

export default Card;
