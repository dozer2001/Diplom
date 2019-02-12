import React, {Component} from 'react';
import GotItem from '../Services/gotCoffee'




export default class CoffeePage extends Component {
    DataMy = new GotItem();

    constructor(props) {
        super(props);
        this.state = {
            data: this.DataMy.getAllCoffee(),

        };
    }



    render() {
        const {data} = this.state;

        return data.map((item,  i ) => {
            const {name, country, url, price} = item;
            const id = i;
            return (
                <div className="shop__item" key={id}>
                    <img
                        src={url}
                        alt="coffee"/>
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}</div>
                </div>
            )
        })
    }

}