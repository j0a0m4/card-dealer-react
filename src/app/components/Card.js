import React from 'react';
import '../../styles/Card.css';

function Card({ image, transform, alt }) {
  return <img style={{ transform }} className="Card" src={image} alt={alt} />;
}

export default Card;
