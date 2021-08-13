import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div className="calculator-display">{result}</div>
  );
}

Display.propTypes = {
  result: PropTypes.number.isRequired,
};