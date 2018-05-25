import React from 'react';
// import renderer from 'react-test-renderer';
import {ResultsBodyItem } from "./ResultsBodyItem";
import { shallow } from 'enzyme'

describe('ResultsBody', function () {
    it('should render without errors ResultsBody', () => {
        const wrapper = shallow(<ResultsBodyItem  title={'title'} genres={['genres']} release_date={'foo'} poster_path ={'foo'}/>);
        expect(wrapper).toMatchSnapshot();
    });
});