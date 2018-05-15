import React from 'react';
import {FilmsSortBy} from './filmsSortBy';
import renderer from "react-test-renderer";

describe('<films FilmsSortBy/>', () => {
    it('should render <FilmsSortBy /> components', () => {
        const wrapper = renderer.create(<FilmsSortBy/>);
        expect(wrapper).toMatchSnapshot();
    });
});