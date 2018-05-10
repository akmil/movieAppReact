import React from 'react';
// import { shallow } from 'enzyme';
import {FilmsSearchButton} from './filmsSearchButton';
import renderer from 'react-test-renderer';

describe('<films FilmsSearchButton />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<FilmsSearchButton/>);
        // const wrapper = shallow(<MainLayout/>);

        expect(wrapper).toMatchSnapshot();
    })
});