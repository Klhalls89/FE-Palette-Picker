import React from 'react';
import { shallow } from 'enzyme'
import Projects from './Project'

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects/>)
  });
  it('Projects component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})