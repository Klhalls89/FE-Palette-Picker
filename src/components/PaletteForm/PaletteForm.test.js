import React from 'react';
import PaletteForm from './PaletteForm.js'
import { shallow } from 'enzyme';
const shortid = require('shortid')


describe('PaletteForm', () => {
  let wrapper;
  let mockProjects;
  let mockHandleProject;

  beforeEach(() => {
    let mockHandleProject = jest.fn()
     mockProjects = [{project_title: 'project one'}]
    wrapper = shallow(<PaletteForm projects={mockProjects} 
                                  handleProject={mockHandleProject}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('options', () => {
    it('should return an array of options', () => {
      wrapper.instance().options()
      expect.arrayContaining(<option></option>)
    });
  });
});
