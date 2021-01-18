import React, { Component } from 'react';

class ReviewInput extends Component 
{
  state = 
  {
    text: ''
  }

  handleOnChange = event =>
  {
    this.setState(
      {
        text: event.target.value
      }
    );
  }

  handleOnSubmit = event =>
  {
    event.preventDefault();

    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState(
      {
        text: ''
      }
    );
  }

  render() 
  {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add a Review!</label>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default ReviewInput;
