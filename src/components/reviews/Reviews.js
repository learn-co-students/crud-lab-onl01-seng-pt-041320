import React from 'react';
import Review from './Review';

const Reviews = props => {
  const assoc = props.reviews.filter(review => review.restaurantId === props.restaurantId);

  //console.log(props.reviews);

  const reviewList = assoc.map((review, idx) => {
    return <Review key={review.id} review={review} deleteRestaurant={props.deleteRestaurant}/>
  })

  return(<div><ul>{reviewList}</ul></div>)
  // return(
  //   <div>{props.reviews.map(review => <Review key={review.id} id={review.id} review={review} deleteRestaurant={props.deleteRestaurant}/>)}</div>
  // )
}

export default Reviews;