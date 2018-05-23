import React from 'react';
// import renderer from 'react-test-renderer';
import {ResultsBody} from "./resultsBody";
import { shallow } from 'enzyme'

describe('ResultsBody', function () {
    it('should render without errors ResultsBody', () => {
        const wrapper = shallow(<ResultsBody/>);
        expect(wrapper).toMatchSnapshot();
    });
});