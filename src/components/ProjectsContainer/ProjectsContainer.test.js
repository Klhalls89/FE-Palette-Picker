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
  let mockRemovePalette;

  beforeEach(() => {
    mockEditPalette = jest.fn()
    mockRemovePalette = jest.fn()
    mockProjects = [{title: 'project one'}, {title: 'project two'}]
    mockAllPalettes = [{color:'123123'},{color:'123123'}]

    wrapper = shallow(<ProjectsContainer editPalette={mockEditPalette} 
                                          projects={mockProjects} 
                                          allPalettes={mockAllPalettes}  
                                          removePalette={mockRemovePalette}/>)
  });

  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('deletePalette', () => {
    it.skip('deletePalette should call removePalette', () => {
      let mockFn = jest.spyOn(wrapper.instance(), 'removePalette');
      wrapper.instance().deletePalette(); 
      expect(mockRemovePalette).toHaveBeenCalled();
    });
  });
});

 
  