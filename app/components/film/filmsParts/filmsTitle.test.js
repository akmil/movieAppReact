import React from 'react';
import { shallow } from 'enzyme';
import {FilmsTitle} from './filmsTitle';
import renderer from "react-test-renderer";
// import {SearchButton} from './searchButton';
// import renderer from 'react-test-renderer';

describe('<films FilmsTitle/>', () => {
    it('should render <FilmsTitle /> components', () => {
        // const wrapper = shallow(<FilmsSortBy />);
        const wrapper = renderer.create(<FilmsTitle/>);
        expect(wrapper).toMatchSnapshot();
    });
});