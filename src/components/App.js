import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

function App() {
  return (
    <>
      <Display result={0} />
      <ButtonPannel />
    </>

  );
}

export default App;
