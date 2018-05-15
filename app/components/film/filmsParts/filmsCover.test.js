import React from 'react';
import {FilmsCover} from './filmsCover';
import renderer from 'react-test-renderer';

describe('<films FilmsCover />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<FilmsCover/>);
        expect(wrapper).toMatchSnapshot();
    })
});