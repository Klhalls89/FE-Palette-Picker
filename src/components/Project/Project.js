import React from 'react';

const Project = () => {
  return (
    <article className="project-area">
      <h2 className="proj-name">project name</h2>
      <div className="saved-palette-disp">
        <h3 className="pal-name">palette name</h3>
        <i className="fas fa-trash-alt"></i>
      </div>
      <section className="saved-colors">
        <div className="saved-color1"></div>
        <div className="saved-color2"></div>
        <div className="saved-color3"></div>
        <div className="saved-color4"></div>
        <div className="saved-color5"></div>
      </section>
    </article>
  )
};

export default Project;