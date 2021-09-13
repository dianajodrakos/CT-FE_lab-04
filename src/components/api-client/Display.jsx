import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

export default function Display({ display }) {
  return <div><ReactJson src={display} /></div>;
}

Display.propTypes = { 
  display: PropTypes.any.isRequired
};
