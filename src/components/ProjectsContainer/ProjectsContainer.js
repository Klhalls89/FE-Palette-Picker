import React, { Component } from 'react';
import Project from '../Project/Project'
import { fetchInfo } from '../../Utility/ApiCalls';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: []
    };
  };

  componentDidMount(){
    this.getPalettes()
  }

  getPalettes = async () => {
    const palettes = await fetchInfo('http://localhost:3001/api/v1/palettes/')
    this.setState({palettes})
  }

  displayProjects = () => {
    const { projects } = this.props
    const { palettes } = this.state

    const newProjects = projects.map(project => {
      const matchingPalettes = palettes.filter(palette => {
        return palette.project_id === project.id
      })
      return <Project project={project} palettes={matchingPalettes}  />
    })
    return newProjects
  }

  render() {
    const projectsToDisplay = this.displayProjects()
    return (
      <div className="projects">
        <form className="project-form">
          <input type="text"/>
          <button>Project Name</button>
        </form>
        <section className="saved-portion">
        {projectsToDisplay}
        </section>
      </div>
    )
  }
}

export default ProjectsContainer;