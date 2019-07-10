import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();
  }


  render() {
    const { id, color_1, color_2, color_3, color_4, color_5 } = this.props;

    const allProjects = 
      <article className="project-area">
        <h2 className="proj-name">
          {this.props.project_title}
        </h2>
        <div className="saved-palette-disp">
          <h3 className="pal-name">
            {this.props.palette_title}
          </h3>
          <section className="saved-colors">
            <div style={{backgroundColor: `#${color_1}`}} 
              className="saved-color1">
            </div>
            <div style={{backgroundColor: `#${color_2}`}} 
              className="saved-color2">
            </div>
            <div style={{backgroundColor: `#${color_3}`}} 
              className="saved-color3">
            </div>
            <div style={{backgroundColor: `#${color_4}`}} 
              className="saved-color4">
            </div>
            <div style={{backgroundColor: `#${color_5}`}} 
              className="saved-color5">
            </div>
            <i className="fas fa-trash-alt"></i>
          </section>
        </div>
      </article>

    return (
      <section>
        {(id) &&  allProjects}
      </section>
    );   
  }
}

export default Project;