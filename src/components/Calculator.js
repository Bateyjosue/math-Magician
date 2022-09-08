import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculator, setCalculator] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    const data = e.target.textContent;
    const calc = calculate(calculator, data);
    setCalculator(calc);
  };
  const { total, next, operation } = calculator;
  return (
    <div className="calc">
      <div className="screen">
        { next || operation || total || 0}
      </div>
      <div className="operation">
        <div>
          <button type="button" onClick={handleClick} value="&divide;">÷</button>
          <button type="button" onClick={handleClick} value="x">x</button>
          <button type="button" onClick={handleClick} value="-">-</button>
          <button type="button" onClick={handleClick} value="+">+</button>
          <button type="button" onClick={handleClick} value="=">=</button>
        </div>
      </div>
      <div className="operand">
        <div>
          <button type="button" onClick={handleClick} value="AC">AC</button>
          <button type="button" onClick={handleClick} value="&plusmn;">+/-</button>
          <button type="button" onClick={handleClick} value="%">%</button>
          <button type="button" onClick={handleClick} value="7">7</button>
          <button type="button" onClick={handleClick} value="8">8</button>
          <button type="button" onClick={handleClick} value="9">9</button>
          <button type="button" onClick={handleClick} value="4">4</button>
          <button type="button" onClick={handleClick} value="5">5</button>
          <button type="button" onClick={handleClick} value="6">6</button>
          <button type="button" onClick={handleClick} value="1">1</button>
          <button type="button" onClick={handleClick} value="2">2</button>
          <button type="button" onClick={handleClick} value="3">3</button>
          <button type="button" onClick={handleClick} value="0">0</button>
          <button type="button"> </button>
          <button type="button" onClick={handleClick} value=".">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
