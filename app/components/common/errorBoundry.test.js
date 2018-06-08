import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './errorBoundry';
import { shallow, mount } from 'enzyme';


const TestComponent = ({ throwError }) => {
  if (throwError) {
    throw new Error('Some exception');
  }

  return <div>Everything looks fine</div>;
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // wrapper.setState({ hasError: true });
    // jest.spyOn(window._virtualConsole, 'emit').mockImplementation(() => false);
  });

  it('should render without errors ErrorBoundary', () => {
    const wrapper = shallow(<ErrorBoundary><TestComponent/></ErrorBoundary>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with hasError ErrorBoundary', () => {
    const wrapper = shallow(<ErrorBoundary><TestComponent/></ErrorBoundary>);

    wrapper.setState({ hasError: true });
    expect(wrapper.text()).toEqual('Something went wrong.');
    expect(wrapper.state().hasError).toBe(true);
  });

  it('should catch error', () => {
    const wrapper = mount(<ErrorBoundary><TestComponent throwError={true}/></ErrorBoundary>);
    expect(wrapper.state().hasError).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
