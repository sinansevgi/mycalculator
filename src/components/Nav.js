import React from 'react';

function Nav() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li><a href="./home">Home</a></li>
        <li><a href="./calculator">Calculator</a></li>
        <li><a href="./quotes">Quotes</a></li>
      </ul>
    </div>
  );
}

export default Nav;
