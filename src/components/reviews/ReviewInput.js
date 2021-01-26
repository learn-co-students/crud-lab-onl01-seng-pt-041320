import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
  this.setState({
    text: event.target.value
  });
}

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.props.restaurantId);
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
      <h3>Review Input</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default ReviewInput;
