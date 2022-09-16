import operate from './logic/operate';

describe('Addition Testing', () => {
  test('1 + 3 return 4', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });
});
describe('Substration Testing', () => {
  test('5 - 7 return -2', () => {
    expect(operate(5, 7, '-')).toBe('-2');
  });
});
describe('Multication Testing', () => {
  test('5 * 7 return 35', () => {
    expect(operate(5, 7, 'x')).toBe('35');
  });
});
describe('Division Testing', () => {
  test('12 ÷ 2 return  6', () => {
    expect(operate(12, 6, '÷')).toBe('2');
  });
});
describe('Modulus Testing', () => {
  test('12 % 2 return  6', () => {
    expect(operate(12, 6, '%')).toBe('0');
  });
});

import calculate from '../logic/calculate';

describe('Test calculate.js', () => {
  it('Test Operation Function', () => {
    const testObj = {
      total: 0,
      next: 4,
      operation: '+',
    };
    const calculation = calculate(testObj, '+');
    expect(calculation.operation).toBe('+');
  });

  it('Test total', () => {
    const testObj = {
      total: 20,
      next: 4,
      operation: '+',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toBe('24');
  });

  it('Test total', () => {
    const testObj = {
      total: 20,
      next: 40,
      operation: '-',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toBe('-20');
  });
});
