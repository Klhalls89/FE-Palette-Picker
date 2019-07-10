/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import SubmitProject from '../SubmitProject/SubmitProject';
import { fetchInfo, newFolder } from '../../Utility/ApiCalls';
import PaletteForm from '../PaletteForm/PaletteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: 
      [
        { color: '', isLocked: false },
        { color: '', isLocked: false },
        { color: '', isLocked: false },
        { color: '', isLocked: false },
        { color: '', isLocked: false } 
      ],
      projects: [],
      folder: {},
      allPalettes: []
    }; 
  }

  componentDidMount() {
    this.makeColors();
    this.getProjects();
    this.getPalettes();
  }

  getProjects = async () => {
    const projects = await fetchInfo('projects');
    this.setState({projects});
  }

  getPalettes = async () => {
    const allPalettes = await fetchInfo('palettes');
    this.setState({allPalettes});
  }

  editPalette = (colors) => {
    console.log(colors)
  }

  makeColors = () => {
    if (!this.state.colors.length) {
      let colors = [];

      for (let i = 0; i < 5; i++) {
        let color = this.genHex();
        colors.push(color);
      }
      this.setState({colors});

    } else {
      let newColors = this.state.colors.map(color => {
        if (color.isLocked == false) {
          return color = this.genHex();
        } else {
          return color;
        }
      });

      this.setState({colors: newColors});
    }
  };

  genHex = () => {
    let hexables = 
      [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
    let shuffledHexables = hexables.sort(() => Math.random() - 0.5);
    let newColor = shuffledHexables.reduce((finalColor, hexable) => {
      
      finalColor += hexable;
      return finalColor.slice(0, 6);
    }, '');

    return {
      color: `#${newColor}`,
      isLocked: false
    };
  };

  handleColor = (location) => {
    const { colors } = this.state;
    const newLock = [...colors ];

    newLock[`${location}`].isLocked = !newLock[`${location}`].isLocked;
    this.setState({ colors: newLock });
  }

  handleProject = (section, name) => {
    const {colors } = this.state;
    let preFolder = {};

    if (section === 'project') {
      const postFolder = {...this.state.folder, project_title: name};
      newFolder(postFolder);
    } else {
      for (let i = 1; i < colors.length + 1; i++) {
        const cleanColor = colors[i - 1].color.replace('#', '');
        preFolder[`color_${[i]}`] = cleanColor;
      }
      preFolder.palette_title = name;
      this.setState({folder: preFolder});
    }
  }


  render() {
    const { colors, projects, allPalettes } = this.state;
    return (
      <div className="App">
        <h1 className="logo">Gen Hex</h1>
        <section className="main-colors">
          <div style={{backgroundColor: colors[0].color}} className="color-1">
            <p>{colors[0].color}</p>
            <i className={`fas ${ (colors[0].isLocked) ? 
              'fa-lock' : 'fa-unlock'}`} onClick={() => this.handleColor(0)}>
            </i>
          </div>
          <div style={{backgroundColor: colors[1].color}} className="color-2">
            <p>{colors[1].color}</p>
            <i className={`fas ${ (colors[1].isLocked) ? 
              'fa-lock' : 'fa-unlock'}`} onClick={() => this.handleColor(1)}>
            </i>        
          </div>
          <div style={{backgroundColor: colors[2].color}} className="color-3">
            <p>{colors[2].color}</p>
            <i className={`fas ${ (colors[2].isLocked) ? 
              'fa-lock' : 'fa-unlock'}`} onClick={() => this.handleColor(2)}>
            </i>
          </div>
          <div style={{backgroundColor: colors[3].color}} className="color-4">
            <p>{colors[3].color}</p>
            <i className={`fas ${ (colors[3].isLocked) ? 
              'fa-lock' : 'fa-unlock'}`} onClick={() => this.handleColor(3)}>
            </i>
          </div>
          <div style={{backgroundColor: colors[4].color}} className="color-5">
            <p>{colors[4].color}</p>
            <i className={`fas ${ (colors[4].isLocked) ? 
              'fa-lock' : 'fa-unlock'}`} onClick={() => this.handleColor(4)}>
            </i>
          </div>
        </section>
        <button onClick={() => this.makeColors()} className="gen-colors">
          Generate Colors
        </button>
        { projects.length && <PaletteForm 
          projects={this.state.projects} 
          handleProject={this.handleProject}/>
        }
        <SubmitProject
          handleProject={this.handleProject}/>
        { allPalettes.length > 0 && 
          <ProjectsContainer projects={projects} 
            allPalettes={allPalettes} editPalette={this.editPalette}/>
        } 
      </div>
    );
  }
}

export default App;
