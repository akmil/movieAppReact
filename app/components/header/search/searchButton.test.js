import React from 'react';
// import { shallow } from 'enzyme';
import {SearchButton} from './searchButton';
import renderer from 'react-test-renderer';

describe('<search SearchButton />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<SearchButton/>);
        // const wrapper = shallow(<MainLayout/>);

        expect(wrapper).toMatchSnapshot();
    })
});