import React from 'react';
import {shallow} from 'enzyme';
import App from './app';



describe('Testing <App/>', () => {
    const app = shallow(<App/>);
    describe('Testing snap & state', () => {
        it('app have rendered correctly', () => {
            expect(app).toMatchSnapshot();
        });

    });


});
