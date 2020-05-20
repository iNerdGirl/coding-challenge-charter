import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  let filterRestaurants = props.restaurants.filter(restaurant => {
    if (props.queryTerm === restaurant.genre) {
      return restaurant.genre.indexOf(props.queryTerm) !== -1;
    } else if (props.queryTerm === restaurant.name) {
      return restaurant.name.indexOf(props.queryTerm) !== -1;
    } else if (props.queryTerm === restaurant.stateIn) {
      return restaurant.stateIn.indexOf(props.queryTerm) !== -1
    } else if (props.queryTerm === restaurant.city) {
      return restaurant.city.indexOf(props.queryTerm) !== -1
    } else {
      return restaurant
    }
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
