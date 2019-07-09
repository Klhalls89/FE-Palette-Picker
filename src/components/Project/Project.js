import React from 'react';

const Project = (props) => {
  if(props) {
   const { project, palettes } = props
   const displayPalettes = palettes.map(palette => {
    return (
        <div key={Date.now()} className="saved-palette-disp">
          <h3 className="pal-name">{palette.palette_title}</h3>
          <i className="fas fa-trash-alt"></i>
          <section className="saved-colors">
            <div style={{backgroundColor: `#${palette.color_1}`}} className="saved-color1"></div>
            <div style={{backgroundColor: `#${palette.color_2}`}}  className="saved-color2"></div>
            <div style={{backgroundColor: `#${palette.color_3}`}} className="saved-color3"></div>
            <div style={{backgroundColor: `#${palette.color_4}`}} className="saved-color4"></div>
            <div style={{backgroundColor: `#${palette.color_5}`}} className="saved-color5"></div>
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