import React, { Component } from 'react';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import { fetchInfo } from '../../Utility/ApiCalls';
import PaletteForm from '../PaletteForm/PaletteForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      colors: [],
      projects: [],
      isColorLocked: {
        position1: true,
        position2: true,
        position3: true,
        position4: true,
        position5: true
      }
  };
}

  componentDidMount(){
    this.makeColors();
    this.getProjects();
  };

  getProjects = async () => {
    const projects = await fetchInfo('http://localhost:3001/api/v1/projects/')
    console.log(projects)
    const palettes = await fetchInfo('http://localhost:3001/api/v1/palettes/')
    console.log(palettes)

  }

  makeColors = () => {
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

  handleColor = (position) => {
    const { isColorLocked } = this.state
    const newLock = { ...isColorLocked }
    newLock[`${position}`] = !newLock[`${position}`]
    this.setState({isColorLocked : newLock})
  }

  render() {
    const {colors, isColorLocked} = this.state

    return (
      <div className="App">
        <h1 className="logo">Palette Picker</h1>
        <section className="main-colors">
          <div style={{backgroundColor: colors[0]}} className="color-1">
            <p>{colors[0]}</p>
            <i className={`fas ${ isColorLocked.position1 ? 'fa-unlock' : 'fa-lock'}`} onClick={() => this.handleColor('position1')}></i>
          </div>
          <div style={{backgroundColor: colors[1]}} className="color-2">
            <p>{colors[1]}</p>
            <i className={`fas ${ isColorLocked.position2 ? 'fa-unlock' : 'fa-lock'}`} onClick={() => this.handleColor('position2')}></i>          </div>
          <div style={{backgroundColor: colors[2]}} className="color-3">
            <p>{colors[2]}</p>
            <i className={`fas ${ isColorLocked.position3 ? 'fa-unlock' : 'fa-lock'}`} onClick={() => this.handleColor('position3')}></i>
          </div>
          <div style={{backgroundColor: colors[3]}} className="color-4">
            <p>{colors[3]}</p>
            <i className={`fas ${ isColorLocked.position4 ? 'fa-unlock' : 'fa-lock'}`} onClick={() => this.handleColor('position4')}></i>
          </div>
          <div style={{backgroundColor: colors[4]}} className="color-5">
            <p>{colors[4]}</p>
            <i className={`fas ${ isColorLocked.position5 ? 'fa-unlock' : 'fa-lock'}`} onClick={() => this.handleColor('position5')}></i>
          </div>
        </section>
        <button onClick={() => this.makeColors()} className="gen-colors">Generate Colors</button>
        <PaletteForm projects={this.state.projects} />
        <ProjectsContainer />
      </div>
    )
  }
}

export default App;
