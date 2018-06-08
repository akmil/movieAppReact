import React from 'react';
// import renderer from 'react-test-renderer';
import { MovieItem } from './movieList';
import { shallow } from 'enzyme';

describe('MovieItem', () => {
  it('should render without errors MovieItem', () => {
    const wrapper = shallow(<MovieItem/>);
    expect(wrapper).toMatchSnapshot();
  });
});
