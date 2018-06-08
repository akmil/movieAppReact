import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import FilmsBox from './filmsBox';
import { shallow } from 'enzyme';

describe('FilmsBox', () => {
  it('should render without errors', () => {
    // const wrapper = renderer.create(<MainLayout/>)
    const wrapper = shallow(<FilmsBox/>);
    expect(wrapper).toMatchSnapshot();
  });
});
