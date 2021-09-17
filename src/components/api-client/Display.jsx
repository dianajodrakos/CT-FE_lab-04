import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../../index.css';

export default function Display({ display }) {
  return <div className={styles.display}><ReactJson src={display} /></div>;
}

Display.propTypes = { 
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
