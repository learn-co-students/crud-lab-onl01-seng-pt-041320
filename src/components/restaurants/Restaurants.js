import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  return(
    <div>{props.restaurants.map(restaurant => <Restaurant key={restaurant.id} id={restaurant.id} restaurant={restaurant} deleteRestaurant={props.deleteRestaurant}/>)}</div>
  )
}

export default Restaurants;