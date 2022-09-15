/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import style from './styles/Quote.module.css';

const highlight = {
  background: 'rgb(218, 51, 17)',
};
export default function Quote() {
  return (
    <main className={style.maincontainer}>
      <p className={style.par}>
        Mathematics is not about <span style={highlight}>numbers</span>,
        {' '}<span style={highlight}>equations</span>,{' '}
        <span style={highlight}>computations</span> , or <span style={highlight}>algorithms</span>;
        it is about understanding. __ William Paul Thurston
      </p>
    </main>
  );
}
