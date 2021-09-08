import React from 'react';
import '../assets/App.css';
import Routes from './Routes';
import Nav from './Nav';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}
