import React from 'react';

const Project = (props) => {

  const { id, color_1, color_2, color_3, color_4, color_5 } = props;
  const allProjects = 
      <article className="project-area">
        <h2 className="proj-name">
          {props.project_title}
          <i className="fas fa-times">
          </i>
        </h2>
        <div className="saved-palette-disp" >
          <h3 className="pal-name">
            {props.palette_title}
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
              className="saved-colors5">
            </div>
            <i class="far fa-edit" onClick={() => props.editPalette(id)}></i>
            <i  className="fas fa-trash-alt" 
              onClick={() => props.deletePalette(id)}></i>
          </section>
        </div>
      </article>;

  return (
    <section>
      {(id) &&  allProjects}
    </section>
  );   
};

export default Project;