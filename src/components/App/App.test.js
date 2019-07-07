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
    it('should call makeColors', () => {
      
    })
  })

  describe('makeColors', () => {
    it('should call genHex the passed amount of times', () => {

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


