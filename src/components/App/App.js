import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      colors: []
    };
  };

  componentDidMount(){
    this.makeFiveColors()
  };

  makeFiveColors = () => {
    let colors = []
    for (let i = 0; i < 5; i++) {
      let color = this.genHex()
      colors.push(color)
    }
    this.setState({colors})
  };

  genHex = () => {
    let hexables = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
    let shuffledHexables = hexables.sort(() => Math.random() - 0.5)
    let newColor = shuffledHexables.reduce((finalColor, hexable) => {
        finalColor += hexable
        return finalColor.slice(0, 6);
    }, '')
    return `#${newColor}`;
  };

  render() {
    const {colors} = this.state
    return (
      <div className="App">
        <h1 className="logo">Palette Picker</h1>
        <section className="main-colors">
          <div style={{backgroundColor: colors[0]}} className="color-1">
            <p>{colors[0]}</p>
            <i className="fas fa-lock"></i>
          </div>
          <div style={{backgroundColor: colors[1]}} className="color-2">
            <p>{colors[1]}</p>
            <i className="fas fa-lock"></i>
          </div>
          <div style={{backgroundColor: colors[2]}} className="color-3">
            <p>{colors[2]}</p>
            <i className="fas fa-lock"></i>
          </div>
          <div style={{backgroundColor: colors[3]}} className="color-4">
            <p>{colors[3]}</p>
            <i className="fas fa-lock"></i>
          </div>
          <div style={{backgroundColor: colors[4]}} className="color-5">
            <p>{colors[4]}</p>
            <i className="fas fa-lock"></i>
          </div>
        </section>
        <button onClick={() => this.makeFiveColors()} className="gen-colors">Generate Colors</button>
        <form className="color-form">
          <select>
            <option>project 1</option>
            <option>project 2</option>
          </select>
          <input type="text"/>
          <button className="save-pal">Save Palette</button>
        </form>
      </div>
    )
  }
}

export default App;
