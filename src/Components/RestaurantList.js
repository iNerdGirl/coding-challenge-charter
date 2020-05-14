import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  const restaurants = props.restaurants.map(rest => {
    return (
      <RestaurantCard
        key={rest.id}
        name={rest.name}
        city={rest.city}
        stateIn={rest.state}
        phoneNumber={rest.telephone}
        genre={rest.genre}
      />
    );
  });

  return <div>{restaurants}</div>;
};

export default RestaurantList;
