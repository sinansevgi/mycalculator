import React from 'react';
import calculate from '../logic/calculate';
import '../assets/App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

function App() {
  if (!calculate) {
    return true;
  }
  return (
    <>
      <Display />
      <ButtonPannel />
    </>
  );
}

export default App;
