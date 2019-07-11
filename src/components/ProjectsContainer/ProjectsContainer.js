import React, { Component } from 'react';
import Project from '../Project/Project';
import { removePalete } from '../../Utility/ApiCalls';
const shortid = require('shortid');

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
  }

   deletePalette = (id) => {
     removePalete(id);
   }

  displayProjects = () => {
    const { projects, allPalettes } = this.props;
    let combineInfo;
    
    if (allPalettes !== undefined && allPalettes.length > 0) {
      combineInfo =  projects.reduce((acc, project) => {
        allPalettes.forEach(palette => {
          if (project.id === palette.project_id) {
            acc.push({...project, ...palette});
          }   
        });
        return acc;
      }, []);
    }

    let allHistory = combineInfo.map(info => {
      return <Project deletePalette={this.deletePalette} editPalette={this.props.editPalette} key={shortid.generate()} {...info}/>;
    });
    return allHistory;
  }

  render() {
    return (
      <div className="projects">
        <section className="saved-portion">
          {this.displayProjects()}
        </section>
      </div>
    );
  }
};

export default ProjectsContainer;