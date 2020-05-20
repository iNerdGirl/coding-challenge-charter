import React from 'react';

const RestaurantCard = ({ name, genre, city, stateIn, phoneNumber }) => {
  return (
    <div className='card cyan darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{name}</span>
        <p>
          Location: {`${city}, ${stateIn}`}
        </p>
        <p>Phone number: {phoneNumber}</p>
      </div>
      <div className='card-action cyan lighten-2 white-text'>
        <p>Tags: {genre}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
