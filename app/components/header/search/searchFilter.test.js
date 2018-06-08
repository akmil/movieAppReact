import React from 'react';
import { shallow } from 'enzyme';
import { SearchFilter } from './searchFilter';
import renderer from 'react-test-renderer';

describe('<search SearchFilter/>', () => {
  it('should render <SearchFilter /> components', () => {
    // const wrapper = shallow(<SearchFilter />);
    const wrapper = renderer.create(<SearchFilter/>);
    expect(wrapper).toMatchSnapshot();
  });


  /*
    it('should render an `.icon-star`', () => {
        const wrapper = shallow(<SearchFilter />);
        expect(wrapper.find('.icon-star')).to.have.length(1);
    });

    it('should render children when passed in', () => {
        const wrapper = shallow((
            <SearchFilter>
                <div className="unique" />
            </SearchFilter>
        ));
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    }); */

  /* it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);
    }); */
});
