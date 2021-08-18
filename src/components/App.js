/* eslint-disable react/no-unused-state */
import React from 'react';
import calculate from '../logic/calculate';
import '../assets/App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonPressed) {
    this.setState((prevState) => calculate(prevState, buttonPressed));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display current={total} result={next} sign={operation} />
        <ButtonPannel handleClick={(e) => this.handleClick(e)} />
      </>
    );
  }
}

export default App;
