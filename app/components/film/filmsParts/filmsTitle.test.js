import React from 'react';
import { shallow } from 'enzyme';
import {FilmsTitle} from './filmsTitle';
import renderer from "react-test-renderer";

describe('<films FilmsTitle/>', () => {
    it('should render <FilmsTitle /> components', () => {
        const wrapper = renderer.create(<FilmsTitle/>);
        expect(wrapper).toMatchSnapshot();
    });
});