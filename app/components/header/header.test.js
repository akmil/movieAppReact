import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from "./header";
import { shallow } from 'enzyme'
// const dispatch = sinon.spy();

describe('Header', function () {
    it('should render without errors', () => {
        // const wrapper = renderer.create(<MainLayout/>)
        const wrapper = shallow(
            <Test dispatch={dispatch} store={mockStore({ runtime: {} })}
                  testData={fakeTestData}
            />
        );
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });

    /*it('should be selectable by class "header-wrapper"', function() {
        expect(shallow(<Header />).is('.header-wrapper')).toBe(true);
    });*/

    it('should render an `.logo`', () => {
        const wrapper = shallow(<Header />);
        console.log('wrapper' , wrapper)
        expect(wrapper.find('.logo')).to.have.length(1);
    });

   /* it('should render children when passed in', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<div className="header-wrapper" />)).to.equal(true);
    })*/

    /*it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);
    });*/
});
