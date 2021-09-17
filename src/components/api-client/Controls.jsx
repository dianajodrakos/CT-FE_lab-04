/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../index.css';

export default function Controls({ onChange, onSubmit }) {
  return (
    <form className={styles.display} onChange={onChange} onSubmit={onSubmit}>
      <input type="text" aria-label="url" name="url" placeholder="URL" />
      <section>
        <div>
          <label htmlFor="get">
            <input type="radio" id="get" name="method" value="GET" />
            <p>GET</p>
          </label>
          <label htmlFor="post">
            <input type="radio" id="post" name="method" value="POST" />
            <p>POST</p>
          </label>
          <label htmlFor="put">
            <input type="radio" id="put" name="method" value="PUT" />
            <p>PUT</p>
          </label>
          <label htmlFor="patch">
            <input type="radio" id="patch" name="method" value="PATCH" />
            <p>PATCH</p>
          </label>
          <label htmlFor="delete">
            <input type="radio" id="delete" name="method" value="DELETE" />
            <p>DELETE</p>
          </label>
        </div>
        <button>Submit</button>
      </section>
      <textarea name="body" aria-label="body" placeholder="raw JSON body" ></textarea>
    </form>
  );
}

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
