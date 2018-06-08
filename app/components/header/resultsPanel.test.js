import React from 'react';
// import renderer from 'react-test-renderer';
import { ResultsCount, ResultsSort } from './resultsPanel';
import { shallow } from 'enzyme';

describe('resultsPanel', () => {
  it('should render without errors ResultsCount', () => {
    // const wrapper = renderer.create(<MainLayout/>)
    const wrapper = shallow(<ResultsCount/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors ResultsSort', () => {
    // const wrapper = renderer.create(<MainLayout/>)
    const wrapper = shallow(<ResultsSort/>);
    expect(wrapper).toMatchSnapshot();
  });
});
