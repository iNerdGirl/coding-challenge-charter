import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  const restaurants = props.restaurants.map(rest => {
    return (
      <RestaurantCard
        key={rest.id}
        name={rest.name}
        address={rest.address1}
        city={rest.city}
        stateIn={rest.state}
        zipCode={rest.zip}
        telephone={rest.telephone}
        website={rest.website}
        hours={rest.hours}
      />
    );
  });

  return <div>{restaurants}</div>;
};

export default RestaurantList;
