import React, { Component } from 'react';

// const PaletteForm = (props) => {
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
    const { value } = e.target;
    this.setState({palette_title: value});
  };
  



  render() {
    const { palette_title } = this.state;
 
    const projectNames = this.props.projects.map((prop) => {
      return <option>{prop.project_title}</option>;
    });  

    return (
      <form className="color-form"
        onSubmit={this.handleSubmit}
        value={palette_title}
      >
        <select>
          {projectNames}
        </select>
        <input 
          className='title-input'
          type="text"
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