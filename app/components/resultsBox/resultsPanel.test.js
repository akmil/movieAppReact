import React from 'react';
// import renderer from 'react-test-renderer';
import ResultsBox from './resultsBox';
import { shallow } from 'enzyme';

describe('resultsBox', () => {
  // it('should render without errors ResultsBody', () => {
  //     const wrapper = shallow(<ResultsBody/>);
  //     expect(wrapper).toMatchSnapshot();
  // });
  it('should render without errors ResultsBody', () => {
    const wrapper = shallow(<ResultsBox/>);
    expect(wrapper).toMatchSnapshot();
  });
});
