import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';
import Header from '../components/Header';
import History from '../components/history/History';

export default class Container extends Component {
state = {
  url: '',
  method: '',
  body: '',
  history: [],
}

handleChange = (event) => {
  
}

handleClick = (event) => {
  
}

handleSubmit = (event) => {
  event.preventDefault();
}

render() {
  return (
    <>
      <Header />
      <section>
        <History />
        <div>
          <Controls />
          <Display />
        </div>
      </section>
    </>
  );
}
}
