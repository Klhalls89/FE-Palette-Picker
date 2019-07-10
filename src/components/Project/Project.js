import React from 'react';

const Project = ({ 
  palette_title, project_title, 
  id, color_1, color_2, color_3, color_4, color_5
}) => {

  if (id) { 
    return (
      <article className="project-area">
        <h2 className="proj-name">
          {project_title}
        </h2>
        <div className="saved-palette-disp">
          <h3 className="pal-name">
            {palette_title}
          </h3>
          <i className="fas fa-trash-alt"></i>
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
          </section>
        </div>
      </article>
    );
  } else {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }


  
};
export default Project;