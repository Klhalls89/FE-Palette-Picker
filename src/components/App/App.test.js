import React from 'react';
import App from './App';
import {shallow } from 'enzyme'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    let mockMakeColors = jest.fn()
    wrapper = shallow(<App makeColors={mockMakeColors}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('componentDidMount', () => {
    it('should call makeColors', () => {
      jest.spyOn(wrapper.instance(),'makeColors')
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().makeColors).toHaveBeenCalled();
    });
    
    it('should call getProjects', () => {
      let mockFn = jest.spyOn(wrapper.instance(), 'getProjects') ;
      wrapper.instance().componentDidMount();
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('makeColors', () => {
    it('should call genHex five times', () => {
      const genHex = jest.fn();
      let mockFn = jest.spyOn(wrapper.instance(), 'genHex');
      wrapper.instance().makeColors();
      expect(mockFn).toHaveBeenCalledTimes(5);
    });
  });

  describe('genHex', () => {
    it('should output a hex value when called', () => {
     const result = wrapper.instance().genHex()
      expect.stringContaining('#')
    });
  });
});