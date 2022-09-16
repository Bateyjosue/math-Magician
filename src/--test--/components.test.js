import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';

describe('Home Component Test', () => {
  test('should render Home DOM', () => {
    const homeTree = render(<Home />);
    expect(homeTree).toMatchSnapshot();
  });
});

describe('Quote Component Test', () => {
  test('should render Quote on the DOM', () => {
    const quoteTree = render(<Quote />);
    expect(quoteTree).toMatchSnapshot();
  });
});

describe('Calculator Component Test', () => {
  test('should render Calculation', () => {
    const calculatorTree = render(<Calculator />);
    expect(calculatorTree).toMatchSnapshot();
  });
});
