import React from 'react';
// import ReactDOM from 'react-dom';
// import MainLayout from "./mainLayout";
import renderer from 'react-test-renderer';
import MainLayout from "./mainLayout";
import { shallow } from 'enzyme'

describe('MainLayout', function () {
    it('should render without errors', () => {
      // const wrapper = renderer.create(<MainLayout/>)
        const wrapper = shallow(<MainLayout/>);

        expect(wrapper).toMatchSnapshot();
    })
});
