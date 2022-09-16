import React from 'react';
import stylus from './styles/Home.module.css';

export default function Home() {
  return (
    <main>
      <h4 className={stylus.h4}>Welcome to our Page!</h4>
      <p className={stylus.pa}>
        Mathematics as an expression of the human mind reflects the active will, the
        contemplative reason, and the desire for aesthetic perfection. Its basic elements
        are logic and intuition, analysis and construction, generality and individuality.
      </p>
      <p className={stylus.pa}>
        {'One of the most amazing things about mathematics is the people who domath aren\'t usually interested in application, because mathematics itself is truly a beautiful art form. It\'s structures and patterns,and that\'s what we love, and that\'s what we get off on.'}
      </p>
    </main>
  );
}
