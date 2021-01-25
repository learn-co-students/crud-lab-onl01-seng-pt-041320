import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associtedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = associtedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;