import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter((r) => r.restaurantId === this.props.restaurant.id)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={filteredReviews} delete={this.props.deleteReview} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review: review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);