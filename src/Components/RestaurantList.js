import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  let filterRestaurants = props.restaurants.filter(restaurant => {
    return restaurant.genre.indexOf(props.queryTerm) !== -1;
  });
  const restaurants = filterRestaurants.map(rest => {
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
