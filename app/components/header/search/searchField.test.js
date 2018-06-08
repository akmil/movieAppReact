import React from 'react';
import { SearchField } from './searchField';
import renderer from 'react-test-renderer';


describe('<search SearchField/>', () => {
  it('should render <SearchField /> components', () => {
    const wrapper = renderer.create(<SearchField/>);
    expect(wrapper).toMatchSnapshot();
  });
});

