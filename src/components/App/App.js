import React, { Component } from 'react';

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
        <h1 className="logo">Palette Picker</h1>
      </div>
    )
  }
}

export default App;
