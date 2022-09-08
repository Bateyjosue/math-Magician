import React, { Component } from 'react';

export default class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => e.target.value;

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>÷</button>
        <button type="button" onClick={this.handleClick}>x</button>
        <button type="button" onClick={this.handleClick}>-</button>
        <button type="button" onClick={this.handleClick}>+</button>
        <button type="button" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}
