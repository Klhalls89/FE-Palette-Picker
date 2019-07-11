import React from 'react';
import { shallow } from 'enzyme'
import SubmitProject from './SubmitProject'

describe('SubmitProjects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SubmitProject />)
  });
  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});