import React, { Component } from 'react';
import Project from '../Project/Project'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    };
  };

  render() {
    return (
      <div className="projects">
        <form className="project-form">
          <input type="text"/>
          <button>Project Name</button>
        </form>
        <section className="saved-portion">
          <Project />
        </section>
      </div>
    )
  }
}

export default Projects;