import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      colors: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Logo">Palette Picker</h1>
      </div>
    )
  }
}

export default App;
