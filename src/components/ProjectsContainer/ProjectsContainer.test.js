import React from 'react';
import ProjectsContainer from './ProjectsContainer.js';
import Project from '../Project/Project.js'; 
import { removePalette } from '../../Utility/ApiCalls';
import { shallow } from 'enzyme';

let shortid = require('shortid');

describe('Projects Containers', () => {
  let wrapper;
  let mockEditPalette;
  let mockProjects;
  let mockAllPalettes;
  beforeEach(() => {
    mockEditPalette = jest.fn()
    mockProjects = [{title: 'project one'}, {title: 'project two'}]
    mockAllPalettes = [{color:'123123'},{color:'123123'}]

    wrapper = shallow(<ProjectsContainer editPalette={mockEditPalette} 
                                          projects={mockProjects} 
                                          allPalettes={mockAllPalettes}  />)
  });

  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('deletePalette', () => {
    it.only('deletePalette should call removePalette', () => {
      const removePalette = jest.fn();
      wrapper.instance().deletePalette();
      expect(removePalette).toHaveBeenCalled();
    });
  });
});

  