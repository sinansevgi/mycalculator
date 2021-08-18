import operate from './operate';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/', '%', '='];
const quickActions = ['AC', '+/-', '.'];

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
    } else if (buttonName === '+/-') {
      total = operate(total, -1, '*');
    } else if (buttonName === '.') {
      if (next.length === 0) {
        next = '0.';
      } else {
        next += '.';
      }
    }
  } else if (operators.includes(buttonName)) {
    if (buttonName === '=') {
      total = operate(total, next, operation);
    } else if (!total) {
      total = next;
      next = '';
      operation = buttonName;
    }
  }

  return (total);
};

export { calculate as default };
