import React, { Component } from 'react';
import logo from './logo.svg';
import Dice from './js/Dice.js';
import MultipleDice from './js/MultipleDice.js';

class App extends Component {
  render() {
    return (
      <div>
        <Dice />
        <MultipleDice />
      </div>
    );
  }
}

export default App;
