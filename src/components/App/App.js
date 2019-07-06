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
        <button className="gen-colors">Generate Colors</button>
        <form className="color-form">
          <select>
            <option>project 1</option>
            <option>project 2</option>
          </select>
          <input type="text"/>
          <button className="save-pal">Save Palette</button>
        </form>
        <form className="project-form">
          <input type="text"/>
          <button>Project Name</button>
        </form>
        <section className="saved-portion">
          <article className="project-area">
            <h2>project name</h2>
            <h3>palette name</h3>
            <div className="saved-color1"></div>
            <div className="saved-color2"></div>
            <div className="saved-color3"></div>
            <div className="saved-color4"></div>
            <div className="saved-color5"></div>
          </article>
        </section>
      </div>
    )
  }
}

export default App;
