import React, { Component } from 'react';
import Controls from '../components/api-client/Controls';
import Display from '../components/api-client/Display';
import Header from '../components/Header';
import History from '../components/history/History';
import { getAPI } from '../services/fetchServices';

export default class Container extends Component {
state = {
  url: '',
  method: '',
  body: '',
  history: [],
  display: { 'Hello, Dave': 'You\'re looking well today.' }
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();
  const display = await getAPI(this.state.url);
  console.log(display);
  this.setState({ display });

}

// handleClick = (event) => {
  
// }

render() {
  console.log(this.state);

  const { display } = this.state;
  return (
    <>
      <Header />
      <section className="main">
        <History />
        <div>
          <Controls onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          <Display display={display}/>
        </div>
      </section>
    </>
  );
}
}
