import React from 'react';
import {mount} from 'enzyme';
import MainPage from './MainPage'


describe('Testing <MainPage/>', () => {

    const detalis = mount (<MainPage/>);


    describe('Testing  state', () => {

        it('CoffeePage have rendered correctly', () => {
            expect(detalis).toMatchSnapshot();
        });
        it('CoffeePage state "loading" is true', () =>{
            expect(detalis.state().loading).toBeFalse();
        });

        it('CoffeePage state "error" is ', () =>{
            expect(detalis.state().error).toBeTruthy();
        });

    });


});
