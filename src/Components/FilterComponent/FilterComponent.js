import React, {Component} from 'react';




export default class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons =[
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'},
        ]
    }

    render(){
        const buttons = this.buttons.map(({name,label}) =>{
            return (
                <button
                    key={name}
                    className='shop__filter-btn'
                    onClick={() => this.props.onFilterSelect(name)}
                >{label}</button>
            )
        });
        return(
            <div className="shop__filter-group">
                {buttons}
            </div>

        )
    }
};