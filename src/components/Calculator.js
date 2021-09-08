import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

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
    <div className="main-calculator">
      <Display current={total} result={next} sign={operation} />
      <ButtonPannel handleClick={(e) => handleClick(e)} />
    </div>
  );
}
