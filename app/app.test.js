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

    /*it('should correctly calculate salary' , () => {
        const result = calculateSalary({ testsWritten: 5 });

        expect(result).toMatchSnapshot();

        expect(result).toEqual({
            prop1: {
                prop2: {
                    value: 5,
                }
            },
            prop3: {}
            prop8: {
                result: "No salary on this month"
            }
        })
    })*/
});
