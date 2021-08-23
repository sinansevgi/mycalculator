import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ handleClick, name }) {
  return (
    <button name={name} type="button" onClick={(e) => handleClick(e.target.name)}>{name}</button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
