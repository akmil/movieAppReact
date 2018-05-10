import React from 'react';
// import renderer from 'react-test-renderer';
import {ResultsBodyItem, ResultsBody} from "./resultsBox";
import { shallow } from 'enzyme'

describe('resultsBox', function () {
    it('should render without errors ResultsBodyItem', () => {
        // const wrapper = renderer.create(<MainLayout/>)
        const wrapper = shallow(<ResultsBodyItem/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render without errors ResultsBody', () => {
        // const wrapper = renderer.create(<MainLayout/>)
        const wrapper = shallow(<ResultsBody/>);
        expect(wrapper).toMatchSnapshot();
    });
});
