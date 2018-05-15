import React from 'react';
// import { shallow } from 'enzyme';
import {FilmsList} from './filmsList';
import renderer from 'react-test-renderer';

describe('<films FilmsList />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<FilmsList/>);
        expect(wrapper).toMatchSnapshot();
    })
});