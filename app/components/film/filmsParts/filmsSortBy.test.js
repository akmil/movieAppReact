import React from 'react';
import { shallow } from 'enzyme';
import {FilmsSortBy} from './filmsSortBy';
import renderer from "react-test-renderer";
// import {SearchButton} from './searchButton';
// import renderer from 'react-test-renderer';

describe('<films FilmsSortBy/>', () => {
    it('should render <FilmsSortBy /> components', () => {
        // const wrapper = shallow(<FilmsSortBy />);
        const wrapper = renderer.create(<FilmsSortBy/>);
        expect(wrapper).toMatchSnapshot();
    });
});