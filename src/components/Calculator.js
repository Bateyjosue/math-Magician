import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="screen">
          0
        </div>
        <div className="operation">
          <ul>
            <li>÷</li>
            <li>x</li>
            <li>-</li>
            <li>+</li>
            <li>=</li>
          </ul>
        </div>
        <div className="operand">
          <ul>
            <li>AC</li>
            <li>+/-</li>
            <li>%</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>0</li>
            <li />
            <li>.</li>
          </ul>
        </div>
      </div>
    );
  }
}
