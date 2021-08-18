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
  }

  handleChange(e) {
    this.setState((previousState) => { calculate({previousState.total, previousState.next, previousState.operation}, e.target.value); });
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPannel />
      </>
    );
  }
}

export default App;
