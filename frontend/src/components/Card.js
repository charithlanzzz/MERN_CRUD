import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className='card'>
      <img src={imageSrc} alt={title} className='image'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
