import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import {About} from "../pages/About";
import {FourOhFour} from "../pages/FourOhFour";
import { shallow } from 'enzyme'
import PagesList from "./pagesList";
import Search from "./search";

describe('About, FourOhFour, PagesList, Search', function () {
    it('should render About without errors', () => {
      // const wrapper = renderer.create(<About/>)
        const wrapper = shallow(<About match={ {params:{tab:"tabName", section: 'sectionTestName'}} }/>);
        expect(wrapper).toMatchSnapshot();
    })

    it('should render FourOhFour without errors', () => {
      // const wrapper = renderer.create(<FourOhFour/>)
        const wrapper = shallow(<FourOhFour/>);
        expect(wrapper).toMatchSnapshot();
    })

    it('should render PagesList without errors', () => {
      // const wrapper = renderer.create(<FourOhFour/>)
        const wrapper = shallow(<PagesList/>);
        expect(wrapper).toMatchSnapshot();
    })

    it('should render Search without errors', () => {
      // const wrapper = renderer.create(<FourOhFour/>)
        const wrapper = shallow(
            <Search match={ {params:{query:"querySearch"}} }/>
        );
        expect(wrapper).toMatchSnapshot();
    })

});
