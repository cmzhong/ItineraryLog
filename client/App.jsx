import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './styles.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <MainContainer /> 
      </div>
    )
  }
}

export default App;