import React from 'react';
// import { shallow } from 'enzyme';
import {FilmsCover} from './filmsCover';
import renderer from 'react-test-renderer';

describe('<films FilmsCover />', () => {
    it('should render SearchButton without errors', () => {
        const wrapper = renderer.create(<FilmsCover/>);
        // const wrapper = shallow(<MainLayout/>);

        expect(wrapper).toMatchSnapshot();
    })
});