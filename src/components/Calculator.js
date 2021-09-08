import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function Calculator() {
  const [calc, setCalc] = useState(
    {
      total: '',
      next: '',
      operation: '',
    },
  );

  const handleClick = (buttonPressed) => {
    setCalc((calc) => calculate(calc, buttonPressed));
  };

  const { total, next, operation } = calc;
  return (
    <div className="calculator">
      <h2>Lets do some math!</h2>
      <div className="main-calculator">
        <Display current={total} result={next} sign={operation} />
        <ButtonPanel handleClick={(e) => handleClick(e)} />
      </div>
    </div>
  );
}
