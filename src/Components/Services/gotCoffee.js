import React, {Component} from 'react';
import MyData from  '../../db.json'

export default class GotItem {
    constructor() {
        this._apiBase = MyData;
    }

    getResource = async () => {
        const res = await fetch(MyData);


        return await res.json();
    };
    coffee(){
        const charcter =  this.getResource();
        console.log(charcter);
    }

}