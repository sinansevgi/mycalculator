import operate from './operate';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', 'X', '÷', '='];
const quickActions = ['AC', '+/-', '.', '%'];

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  if (numbers.includes(buttonName)) {
    if (next) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  } else if (quickActions.includes(buttonName)) {
    if (buttonName === 'AC') {
      total = '';
      next = '';
      operation = '';
    } else if (buttonName === '+/-' && (next || total)) {
      if (total !== '') {
        total = operate(total, '-1', 'X');
      } else {
        total = operate(next, '-1', 'X');
        next = '';
      }
    } else if (buttonName === '%' && (next || total)) {
      if (total !== '') {
        total = operate(total, '100', '÷');
      } else {
        total = operate(next, '100', '÷');
        next = '';
      }
    } else if (buttonName === '.') {
      if (next.length === 0) {
        next = '0.';
      } else {
        next += '.';
      }
    }
  } else if (operators.includes(buttonName)) {
    if (buttonName === '=') {
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = '';
        operation = '';
      }
    } else if (total === '') {
      total = next;
      next = '';
      operation = buttonName;
    } else if (next !== '' && operation !== '') {
      total = operate(total, next, operation);
      operation = buttonName;
      next = '';
    } else {
      operation = buttonName;
    }
  }

  return ({ total, next, operation });
};

export { calculate as default };
