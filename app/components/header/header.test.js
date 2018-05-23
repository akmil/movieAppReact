import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from "./header";
import { shallow } from 'enzyme'
import sinon from 'sinon'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const dispatch = sinon.spy();

describe('Header', function () {
    it('should render without errors', () => {
        // const wrapper = renderer.create(<MainLayout/>)
        /*const wrapper = shallow(
            <Test dispatch={dispatch} store={mockStore({ runtime: {} })}
                  testData={fakeTestData}
            />
        );*/
        const wrapper = shallow(<Header dispatch={dispatch} store={mockStore({ runtime: {}, movies:[] })}/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it('should be dispatch Header', function() {
    //     const wrapper = shallow(<Header dispatch={dispatch} store={mockStore({ runtime: {}, movies:[] })}/>);
    // });

    /*it('should render an `.logo`', () => {
        const wrapper = shallow(<Header dispatch={'some'} store={mockStore({ runtime: {}, movies:[] })}/>);
        console.log('wrapper' , wrapper)
        expect(wrapper.find('.logo')).to.have.length(1);
    });*/

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
