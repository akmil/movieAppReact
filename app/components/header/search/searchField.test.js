import React from 'react';
// import { shallow } from 'enzyme';
import {SearchField} from './searchField';
import renderer from "react-test-renderer";


describe('<search SearchField/>', () => {
        it('should render <SearchField /> components', () => {
            // const wrapper = shallow(<SearchFilter />);
            const wrapper = renderer.create(<SearchField/>);
            expect(wrapper).toMatchSnapshot();
        });
    }
);

