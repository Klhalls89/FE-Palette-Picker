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

  describe('componentDidMount', () => {
    it.skip('should call makeColors', () => {
      const makeColors = jest.fn()
      expect(makeColors).toHaveBeenCalledTimes(1)
    })
    it.skip('should call getProjects', () => {
      let getProjects = jest.fn()
      expect(getProjects).toHaveBeenCalledTimes(1)
    })
  })

  describe('makeColors', () => {
    it.skip('should call genHex the passed amount of times', () => {
      //setup
      const genHex = jest.fn()
      wrapper.instance.makeColors()
      expect(genHex).toHaveBeenCalled()
    })
  })

  describe('genHex', () => {
    it('should output a hex value when called', () => {

    })
  })

  describe('render', () => {
    it('should match the snapshot', () => {

    })
  })
})


