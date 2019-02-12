import React, {Component} from 'react';
import MyData from  '../../db.json'
import idGenerator from 'react-id-generator';
export default class GotItem {
    constructor() {
        this.apiBase = MyData;
        this.htmlId = idGenerator();
    }


    getAllbestsellers() {
        const bestsellersItem = (this.apiBase.bestsellers);
        return bestsellersItem.map(this._transformBestsellers)
        // return bestsellersItem
    };

    getAllCoffee() {
        const coffeeItem = (this.apiBase.coffee);
        return coffeeItem.map(this._transformCoffee)


    };


    _transformBestsellers = (bestsellers) => {

        return {
            name: bestsellers.name,
            url: bestsellers.url,
            price: bestsellers.price,

        }

    };
    idGen = () =>{
        const res = this.htmlId;
        return res
    }
    _transformCoffee = (coffee) => {

        return {
            name: coffee.name,
            url: coffee.url,
            price: coffee.price,
            country: coffee.country,
            description: coffee.description,

        }

    }
}