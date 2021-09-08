import operate from '../../logic/operate';

describe('Test each mathematical operation in operate.js', () => {
  test('it should add two numbers (+)', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('it should subtract two numbers (-)', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('it should multiply two numbers (X)', () => {
    expect(operate(2, 2, 'X')).toBe('4');
  });
  test('it should divide two numbers (÷)', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('it should return first number if operation not described', () => {
    expect(operate(8, 2, 'a')).toBe('8');
  });
  test('it should return string', () => {
    expect(typeof operate(8, 2, '+')).toBe('string');
  });
  test('it should not return BigInt', () => {
    expect(typeof operate(8, 2, '+')).not.toBe('big');
  });
});
