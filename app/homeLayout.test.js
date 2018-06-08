import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import HomeLayout from './homeLayout';
import { shallow } from 'enzyme';

describe('HomeLayout', () => {
  it('should render without errors', () => {
    // const wrapper = renderer.create(<HomeLayout/>)
    const wrapper = shallow(<HomeLayout/>);
    expect(wrapper).toMatchSnapshot();
  });
});
