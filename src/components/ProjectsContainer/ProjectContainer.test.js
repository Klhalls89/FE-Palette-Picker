import React from 'react';
import { shallow } from 'enzyme'
import ProjectContainer from './ProjectContainer'

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectContainer />)
  });
  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})