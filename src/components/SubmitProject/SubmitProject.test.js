import React from 'react';
import SubmitProject from './SubmitProject'
import Project from '../Project/Project';
import { shallow } from 'enzyme';

describe('SubmitProject', () => {
  let wrapper;
  let mockProjects;
  let mockHandleProject;
  let mockEvent;

  beforeEach(() => {
    let mockHandleProject = jest.fn()
     mockProjects = [{project_title: 'project one'}]
    wrapper = shallow(<SubmitProject
          handleProject={mockHandleProject}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

    describe('handleChange', () => {
      it.skip('should set state with event change', () => {
        mockEvent = <input value="k"/>
        let event = mockEvent;
        wrapper.instance().handleChange(event)
        const state = wrapper.instance().state
        expect(state.project_title).toBe('k')
      });
    });
});