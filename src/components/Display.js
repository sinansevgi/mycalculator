import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, current, sign }) {
  return (
    <div className="calculator-display">{`${current} ${sign} ${result}`}</div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  current: PropTypes.string,
  sign: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  current: '0',
  sign: '',
};
