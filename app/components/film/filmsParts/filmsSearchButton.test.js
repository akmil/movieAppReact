import React from 'react';
import { shallow } from 'enzyme';
import {FilmsSearchButton} from './filmsSearchButton';
// import renderer from 'react-test-renderer';

describe('<films FilmsSearchButton />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = shallow(<FilmsSearchButton/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should set class .dark-theme', () => {
        const wrapper = shallow(<FilmsSearchButton theme={'dark'}/>);
        console.log(wrapper.find('.dark-theme'));
        expect(wrapper.find('.dark-theme').length).toEqual(1);
    })
});