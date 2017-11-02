import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const expressApp = 'https://decode-express-test-mj.herokuapp.com'
// const expressApp = 'http://localhost:5000'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    fetch(`${expressApp}/random`)
      .then(response => response.text())
      .then(text => this.setState({text: text}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Michael's React-Express app</h1>
        </header>
        <p className="App-intro">
          This React app connects to the Express app at {expressApp}.
        </p>
        <div>ExpressApp says:</div>
        <div style={{'borderStyle': 'solid'}}>
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default App;
