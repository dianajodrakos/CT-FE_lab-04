/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ onChange, onSubmit }) {
  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <input type="text" aria-label="url" name="url" placeholder="URL" />
      <section>
        <div>
          <label htmlFor="get">GET
            <input type="radio" id="get" name="method" value="GET" />
          </label>
          <label htmlFor="post">POST
            <input type="radio" id="post" name="method" value="POST" />
          </label>
          <label htmlFor="put">PUT
            <input type="radio" id="put" name="method" value="PUT" />
          </label>
          <label htmlFor="patch">PATCH
            <input type="radio" id="patch" name="method" value="PATCH" />
          </label>
          <label htmlFor="delete">DELETE
            <input type="radio" id="delete" name="method" value="DELETE" />
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
