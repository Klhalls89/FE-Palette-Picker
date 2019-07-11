import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer';
import { removePalette } from '../../Utility/ApiCalls';

describe('Projects Containers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectsContainer />)
  });

  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('deletePalette', () => {
    it.only('deletePalette should call removePalette from apiCall', () => {
      const removePalette = jest.fn();
      wrapper.instance.deletePalette();
      expect(removePalette).toHaveBeenCalledTimes(1);
    });
  });
});

  