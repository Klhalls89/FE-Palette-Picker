import React, { Component } from 'react';
import Project from '../Project/Project'

class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      projectTitle: ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({projectTitle: value});
  }



  render() {
    return (
      <div className="projects">
        <form className="project-form">
          <label htmlFor="project-title-input">Enter Project Name</label>
          <input type="text" id="project-title-input" 
            onChange={(event) => this.handleChange(event)}
            value={this.state.projectTitle}
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

export default ProjectsContainer;