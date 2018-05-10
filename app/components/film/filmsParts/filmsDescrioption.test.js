import React from 'react';
// import { shallow } from 'enzyme';
import {FilmsDescription} from './filmsDescription';
import renderer from 'react-test-renderer';

describe('<films FilmsDescription />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<FilmsDescription/>);
        // const wrapper = shallow(<MainLayout/>);

        expect(wrapper).toMatchSnapshot();
    })
});