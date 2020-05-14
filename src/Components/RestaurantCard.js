import React from 'react';

const RestaurantCard = ({
  name,
  address,
  city,
  stateIn,
  zipCode,
  telephone,
  website,
  hours,
}) => {
  return (
    <div className='card cyan darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{name}</span>
        <p>
          Address: {address} {city} {stateIn}, {zipCode}{' '}
        </p>
        <p>Phone number: {telephone}</p>
        <p>Hours: {hours}</p>
      </div>
      <div className='card-action'>
        <a href={website}>Website</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
