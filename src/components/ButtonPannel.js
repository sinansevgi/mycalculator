import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ handleClick }) {
  return (
    <div className="buttons-container">
      <div className="top-row">
        <Button name="AC" handleClick={(e) => { handleClick(e); }} />
        <Button name="+/-" handleClick={(e) => { handleClick(e); }} />
        <Button name="%" handleClick={(e) => { handleClick(e); }} />
        <Button className="orange" name="÷" handleClick={(e) => { handleClick(e); }} />
      </div>
      <div className="first-row">
        <Button name="7" handleClick={(e) => { handleClick(e); }} />
        <Button name="8" handleClick={(e) => { handleClick(e); }} />
        <Button name="9" handleClick={(e) => { handleClick(e); }} />
        <Button className="orange" name="X" handleClick={(e) => { handleClick(e); }} />
      </div>
      <div className="second-row">
        <Button name="4" handleClick={(e) => { handleClick(e); }} />
        <Button name="5" handleClick={(e) => { handleClick(e); }} />
        <Button name="6" handleClick={(e) => { handleClick(e); }} />
        <Button className="orange" name="-" handleClick={(e) => { handleClick(e); }} />
      </div>
      <div className="third-row">
        <Button name="1" handleClick={(e) => { handleClick(e); }} />
        <Button name="2" handleClick={(e) => { handleClick(e); }} />
        <Button name="3" handleClick={(e) => { handleClick(e); }} />
        <Button className="orange" name="+" handleClick={(e) => { handleClick(e); }} />
      </div>
      <div className="forth-row">
        <Button name="0" className="zero" handleClick={(e) => { handleClick(e); }} />
        <Button name="." handleClick={(e) => { handleClick(e); }} />
        <Button className="orange" name="=" handleClick={(e) => { handleClick(e); }} />
      </div>
    </div>

  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
