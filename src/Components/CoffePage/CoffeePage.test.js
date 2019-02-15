import React from 'react';
import {mount} from 'enzyme';
import CoffeePage from './CoffeePage'


describe('Testing <CoffeePage/>', () => {

    const detalis = mount (<CoffeePage/>);


    describe('Testing  state', () => {

        it('CoffeePage have rendered correctly', () => {
            expect(detalis).toMatchSnapshot();
        });
        it('CoffeePage state "filter" is true', () =>{
            expect(detalis.state().filter).toBeEmpty();
        });
        it('CoffeePage state "term" is true', () =>{
            expect(detalis.state().filter).toBeEmpty();
        });
        it('CoffeePage state "error" is ', () =>{
            expect(detalis.state().error).toBeTruthy();
        });

    });


});
