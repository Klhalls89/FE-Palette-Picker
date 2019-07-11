import React from 'react';
import App from './App';
import {shallow } from 'enzyme';
import * as MD from '../../Utility/Mockdata';

describe('App', () => {
  let wrapper, mockMakeColors, mockHandleColor;

  beforeEach(() => {
    mockMakeColors = jest.fn();
    mockHandleColor = jest.fn();
    wrapper = shallow(<App 
      projects={MD.mockProjects}
      makeColors={mockMakeColors}
      handleColor={mockHandleColor}
    />);
  });

  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call render no colors when colors are empty', () => {
    const colors = [{color: ''}, {color: ''}, {color: ''}, {color: ''}, {color: ''}, {color: ''}];
    wrapper.setState({colors});
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call makeColors when clicked', () => {
    const colors = [
      {color: '', isLocked: true}, 
      {color: '', isLocked: true}, 
      {color: '', isLocked: true}, 
      {color: '', isLocked: true}, 
      {color: '', isLocked: true}, 
      {color: '', isLocked: true}];
    wrapper.setState({colors});
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render PaletteForm', () => {
    const projects = [{id: 1, project_title: 'Mellow'}]
    wrapper.setState({projects})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render ProjectsContainer', () => {
    const allPalettes = [{color: '#83475'}]
    wrapper.setState({allPalettes})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    it('should call makeColors', () => {
      jest.spyOn(wrapper.instance(), 'makeColors');
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().makeColors).toHaveBeenCalled();
    });
    
    it('should call getProjects', () => {
      let mockFn = jest.spyOn(wrapper.instance(), 'getProjects');
      wrapper.instance().componentDidMount();
      expect(mockFn).toHaveBeenCalled();
    });

    it('should call getPalettes', () => {
      let mockFn = jest.spyOn(wrapper.instance(), 'getPalettes');
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