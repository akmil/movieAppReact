import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from "./errorBoundry";
import { shallow } from 'enzyme'

const wrapper = shallow(<ErrorBoundary/>);

describe('ErrorBoundary', function () {
    beforeEach(()=>{
        // wrapper.setState({ hasError: true });
        // jest.spyOn(window._virtualConsole, 'emit').mockImplementation(() => false);
    });

    it('should render without errors ErrorBoundary', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with hasError ErrorBoundary', () => {
        wrapper.setState({ hasError: true });
        expect(wrapper.text()).toEqual('Something went wrong.');
        expect(wrapper.state().hasError).toBe(true);
    });
});
;