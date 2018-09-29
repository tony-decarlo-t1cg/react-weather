import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..." required></input>
            <input type="text" name="country" placeholder="Country..." required></input>
            <button>Get Weather</button>
        </form>
    );
  }
}

export default Form;
