import React, { Component } from 'react';
import Project from '../Project/Project';

class ProjectsContainer extends Component {
  // constructor(props) {
    // super(props);
  // }

  displayProjects = () => {
    const { projects, allPalettes } = this.props;
    // combines matching project foreign key to palette 
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
      return <Project key={info.id} {...info}/>;
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
}

export default ProjectsContainer;