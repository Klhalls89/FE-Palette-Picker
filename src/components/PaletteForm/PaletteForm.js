import React, { Component } from 'react';
const shortid = require('shortid');

class PaletteForm extends Component {
  constructor() {
    super(); 
    this.state = {
      palette_title: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { palette_title } = this.state;
    this.props.handleProject('palette', palette_title);
    this.setState({palette_title: ''});
  };
    
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({[name]: value});
  };

  options = () => {
    const {projects} = this.props;
    if (projects.length > 0) {
      return  projects.map(prop => {
        return <option key={shortid.generate()} value={`${prop.project_title}`}>{prop.project_title}</option>;
      });
    }
  }

  editPaletteTitle = () => {
    const { edit, paletteToEdit} = this.props;

    if (edit) {
      this.setState({palette_title: paletteToEdit.palette_title});
    } 
  }
  
  render() {
    const { palette_title } = this.state;
    return (
      <form className="color-form"
        onSubmit={this.handleSubmit}
        value={palette_title}
        onMouseEnter={() => this.editPaletteTitle()}
      >
        <select>
          <option defaultValue value=''>Create Project</option>
          {this.options()}
        </select>
        <input 
          className='title-input'
          type="text"
          name="palette_title"
          onChange={this.handleChange}
          value={palette_title}
          placeholder='Enter Palette Name'
        />
        <button className="save-pal">Save Palette</button>
      </form>
    );
  }
}

export default PaletteForm;

