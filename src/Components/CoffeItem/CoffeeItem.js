import React, {Component} from 'react';
import GotItem from '../Services/gotCoffee'
import {Link} from 'react-router-dom';
import '../LookFor/sass/style.sass'
import Spinner from '../Spinner'
import ErrorMessege from '../errorMessege';

export default class CoffeePage extends Component {
    DataMy = new GotItem();

    constructor(props) {
        super(props);
        this.state = {
            data: this.DataMy.getAllCoffee(),
            term:'',
            filter:'',
            loading: true,
            error: false

        };
    }
componentDidMount(){
    this.setState({loading: false});
}

    onUpdateSearch(term) {
        console.log(1);
        this.setState({term:this.props.onUpdateSearch,loading: false});
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessege/>
        }
        if (this.state.loading) {
            return <Spinner/>
        }
        const {data,term} = this.state;

        if(this.props.onUpdateSearch.length !== this.state.term.length){
          this.onUpdateSearch()
        }

        return data.map((item,  i ) => {
            const {name, country, url, price} = item;
            if(item.name.indexOf(term) ){
                return false
            }
            if(this.props.onFilterSelect.length > 0){
                if(country !== this.props.onFilterSelect){
                    return true
                }
            }
            const id = i;
            return (
                <div className="shop__item" key={id}>
                    <Link to="/ItemPage">
                    <img
                        src={url}
                        alt="coffee"/>
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}</div>
                    </Link>
                </div>
            )
        })
    }

}