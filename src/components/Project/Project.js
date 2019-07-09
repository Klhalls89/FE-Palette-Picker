import React from 'react';

const Project = (props) => {
  if(props) {
   const { project, palettes } = props
   console.log(palettes)
   const displayPalettes = palettes.map(palette => {
    return (
        <div className="saved-palette-disp">
          <h3 className="pal-name">{palette.palette_title}</h3>
          <i className="fas fa-trash-alt"></i>
          <section className="saved-colors">
            <div className="saved-color1"></div>
            <div className="saved-color2"></div>
            <div className="saved-color3"></div>
            <div className="saved-color4"></div>
            <div className="saved-color5"></div>
          </section>
        </div>
    )
   })

    return (
     <article className="project-area">
        <h2 className="proj-name">{project.project_title}</h2>
        {displayPalettes}
      </article>
    )
  }
};

export default Project;