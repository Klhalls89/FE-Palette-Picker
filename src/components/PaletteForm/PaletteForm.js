import React from 'react';

const PaletteForm = (props) => {
  
  const projectNames = props.projects.map((prop) => {
    return <option>{prop.project_title}</option>;
  });

  return (
    <form className="color-form">
      <select>
        {projectNames}
      </select>
      <input type="text"/>
      <button className="save-pal">Save Palette</button>
    </form>
  );
};

export default PaletteForm;