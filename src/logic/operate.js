import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);
  switch (operation) {
    case '+':
      return first.plus(second).toString();
    case '-':
      return first.minus(second).toString();
    case 'X':
      return first.times(second).toString();
    case '÷':
      return first.div(second).toString();
    case '%':
      return first.mod(second).toString();
    default:
      return first.toString();
  }
};

export { operate as default };
