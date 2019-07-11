import React from 'react';
import { shallow } from 'enzyme'
import Project from './Project'

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project />)
  });
  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});