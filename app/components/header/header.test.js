import React from 'react';

import Header from "./header";
import { withRouter } from 'react-router';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import {SearchField} from "./search/searchField";
const initialState = {runtime: {}, movies:[]};
const mockStore = configureStore();
const dispatch = jest.fn();
const history = {
    push: jest.fn(),
}

describe('Header', function () {
    it('should render without errors', () => {
        const wrapper = shallow(
            <Header dispatch={dispatch}
                    store={mockStore(initialState)}
            />
        );
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('should render without errors', () => {
        const wrapper = shallow(
            <Header dispatch={dispatch}
                    store={mockStore(initialState)}
            />
        ).dive();

        wrapper.find(SearchField).simulate('change', {
            target: {
                value: 'hello world'
            }
        });

        expect(wrapper.state()).toEqual({"sortBy": "title", "text": "hello world"})
    });

    it('should render an `.logo`', () => {
        const wrapper = shallow(
            <Header dispatch={dispatch}
                    store={mockStore(initialState)}
            />
        ).dive();
        console.log('wrapper' , wrapper.find('.logo'))
        // expect(wrapper.find('.logo')).to.equal({length:1});
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
