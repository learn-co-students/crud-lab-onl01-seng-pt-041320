import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
  }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        const newRestaurant = {
          text: action.text,
          id: cuid()
        }
        return { ...state, restaurants: state.restaurants.concat(newRestaurant) }

    case 'DELETE_RESTAURANT':

        return {...state, restaurants: state.restaurants.filter(r => r.id !== action.id)};

    case 'ADD_REVIEW':
            const newReview = {
              text: action.review.text,
              restaurantId: action.review.restaurantId,
              id: cuid()
            }
            return { ...state, reviews: state.reviews.concat(newReview) }

    case 'DELETE_REVIEW':

            return {...state, reviews: state.reviews.filter(r => r.id !== action.id)};

    default:
      return state;
  }
}