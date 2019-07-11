import React from 'react';
import { shallow } from 'enzyme';
import PaletteForm from './PaletteForm';

describe('PaletteForms', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PaletteForm />);
  });
  it('PaletteForms component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});