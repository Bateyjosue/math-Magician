import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

import style from './components/styles/App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ma className="App">
        <header className={style.flex}>
          <h1>Math Magicians</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculate</Link>
            <Link to="/quote">Quote</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </ma>
    );
  }
}

export default App;
