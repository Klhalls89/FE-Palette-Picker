import React, { Component } from 'react';
import Project from '../Project/Project';
import { newProject } from '../../Utility/ApiCalls';

class SubmitProject extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      project_title: ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({project_title: value});
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const {project_title} = this.state;

    newProject({project_title});
    this.props.handleProject('project', project_title);
    this.setState({project_title: ''});
  }

  render() {

    return (
      <div className="projects">
        <form className="project-form" onSubmit={this.handleSubmit}>
          <input type="text" 
            className="title-input" 
            onChange={this.handleChange}
            autoComplete='off'
            value={this.state.project_title}
            placeholder='Enter Project Title'
          />
          <button>Submit</button>
        </form>
        <section className="saved-portion">
          <Project />
        </section>
      </div>
    );
  }
}

export default SubmitProject;