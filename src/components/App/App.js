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
        <section className="main-colors">
          <div className="color-1">
            <p>#FD3754</p>
            <i className="fas fa-lock"></i>
          </div>
          <div className="color-2">
            <p>#FB1754</p>
            <i className="fas fa-lock"></i>
          </div>
          <div className="color-3">
            <p>#0B1754</p>
            <i className="fas fa-lock"></i>
          </div>
          <div className="color-4">
            <p>#0B1B54</p>
            <i className="fas fa-lock"></i>
          </div>
          <div className="color-5">
            <p>#FB1B33</p>
            <i className="fas fa-lock"></i>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
