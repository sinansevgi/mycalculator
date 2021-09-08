import calculate from '../../logic/calculate';

describe('calculate', () => {
  const memory = {
    total: '2',
    next: '2',
    operation: 'X',
  };

  test('When AC pressed, it should remove memory', () => {
    expect(calculate(memory, 'AC')).toEqual({ total: '', next: '', operation: '' });
  });
  test('it should perform operation when equal button pressed', () => {
    expect(calculate({ total: '2', next: '2', operation: 'X' }, '=')).toEqual({ total: '4', next: '', operation: '' });
  });
  test('it should set total to next when operation button pressed', () => {
    expect(calculate({ total: '', next: '2', operation: '' }, '+')).toEqual({ total: '2', next: '', operation: '+' });
  });
  test('it should perform previous operation when new button pressed', () => {
    expect(calculate({ total: '2', next: '2', operation: 'X' }, '+')).toEqual({ total: '4', next: '', operation: '+' });
  });
  test('it should set operation when operation button pressed', () => {
    expect(calculate({ total: '2', next: '', operation: '' }, '+')).toEqual({ total: '2', next: '', operation: '+' });
  });
  test('it should concat number to next when any number button pressed', () => {
    expect(calculate({ total: '2', next: '2', operation: 'X' }, '2')).toEqual({ total: '2', next: '22', operation: 'X' });
  });
  test('it should add number to next when any number button pressed', () => {
    expect(calculate({ total: '', next: '', operation: '' }, '2')).toEqual({ total: '', next: '2', operation: '' });
  });
  test('it should multiply number with -1 when +/- pressed', () => {
    expect(calculate({ total: '2', next: '2', operation: 'X' }, '+/-')).toEqual({ total: '-2', next: '2', operation: 'X' });
    expect(calculate({ total: '', next: '2', operation: 'X' }, '+/-')).toEqual({ total: '-2', next: '', operation: 'X' });
  });
  test('it should calculate percentage when % pressed', () => {
    expect(calculate({ total: '', next: '20', operation: '' }, '%')).toEqual({ total: '0.2', next: '', operation: '' });
    expect(calculate({ total: '20', next: '', operation: '' }, '%')).toEqual({ total: '0.2', next: '', operation: '' });
  });
  test('it should put decimal point when . pressed', () => {
    expect(calculate({ total: '', next: '2', operation: '' }, '.')).toEqual({ total: '', next: '2.', operation: '' });
    expect(calculate({ total: '', next: '', operation: '' }, '.')).toEqual({ total: '', next: '0.', operation: '' });
  });
});
