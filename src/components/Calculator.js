import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const data = e.target.textContent;
    const calculation = calculate(this.state, data);
    this.setState(calculation);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc">
        <div className="screen">
          { next || operation || total || 0}
        </div>
        <div className="operation">
          <div>
            <button type="button" onClick={this.handleClick} value="&divide;">÷</button>
            <button type="button" onClick={this.handleClick} value="x">x</button>
            <button type="button" onClick={this.handleClick} value="-">-</button>
            <button type="button" onClick={this.handleClick} value="+">+</button>
            <button type="button" onClick={this.handleClick} value="=">=</button>
          </div>
        </div>
        <div className="operand">
          <div>
            <button type="button" onClick={this.handleClick} value="AC">AC</button>
            <button type="button" onClick={this.handleClick} value="&plusmn;">+/-</button>
            <button type="button" onClick={this.handleClick} value="%">%</button>
            <button type="button" onClick={this.handleClick} value="7">7</button>
            <button type="button" onClick={this.handleClick} value="8">8</button>
            <button type="button" onClick={this.handleClick} value="9">9</button>
            <button type="button" onClick={this.handleClick} value="4">4</button>
            <button type="button" onClick={this.handleClick} value="5">5</button>
            <button type="button" onClick={this.handleClick} value="6">6</button>
            <button type="button" onClick={this.handleClick} value="1">1</button>
            <button type="button" onClick={this.handleClick} value="2">2</button>
            <button type="button" onClick={this.handleClick} value="3">3</button>
            <button type="button" onClick={this.handleClick} value="0">0</button>
            <button type="button"> </button>
            <button type="button" onClick={this.handleClick} value=".">.</button>
          </div>
        </div>
      </div>
    );
  }
}
