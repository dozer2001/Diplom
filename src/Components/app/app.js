import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CoffeePage from '../CoffePage/index'
import MainPage from  '../MainPage/MainPage'

import GotItem from '../Services/gotCoffee'


export default class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {




        return (
            <MainPage/>
            /*<CoffeePage/>*/

        )
    }


};