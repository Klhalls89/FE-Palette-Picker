import React from 'react';
import App from './App';
import {shallow } from 'enzyme'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
