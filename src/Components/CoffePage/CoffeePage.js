import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../LookFor/sass/style.sass'
import FooterPart from '../FooterPart/index'
import GotItem from '../Services/gotCoffee'
import CoffeeItem from '../CoffeItem/CoffeeItem'
import SearchPanel from '../SearchComponent/index'
import PostStatusFilter from '../FilterComponent/FilterComponent';
import ErrorMessege from '../errorMessege';

import logoBlack from './img/Beans_logo_dark.svg'
import girl from './img/coffee_girl.jpg'
import logo from './img/Logo.svg'

import {Container, Row, Col} from 'reactstrap';


export default class CoffeePage extends Component {
    DataMy = new GotItem();

    constructor(props) {
        super(props);
        this.state = {
            data: this.DataMy.getAllbestsellers(),
            term:'',
            filter:'',
            error: false
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }
    onUpdateSearch(term) {
        this.setState({term});

    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    onFilterSelect(filter){
        this.setState({filter});

    }

    render() {

        if (this.state.error) {
            return <ErrorMessege/>
        }
        return (
            <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <Col lg="6">
                            <header>
                                <ul className="header">
                                    <li className="header__item">
                                        <Link to="/">
                                            <img src={logo} alt="logo"/>
                                        </Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to='/OurCoffee'>Our coffee</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to="/ItemPage">For your pleasure</Link>
                                    </li>
                                </ul>
                            </header>
                        </Col>
                    </div>
                    <h1 className="title-big">Our Coffee</h1>
                </div>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <div lg={{size: 4, offset: 2}}>
                            <img className="shop__girl" src={girl} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={logoBlack} alt="Beans logo"/>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </div>
                    </Row>
                    <div className="line"></div>
                    <Row>

                       {/*Инпут с поиском*/}
                            <SearchPanel  onUpdateSearch={this.onUpdateSearch}/>

                        <Col lg="4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>

                                {/*Формируются кнопки и фильмтруются*/}
                                <PostStatusFilter
                                    onFilterSelect={this.onFilterSelect}/>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size: 11, offset: 1}}>
                            <div className="shop__wrapper">

                                 {/*Формируется Итеймы с товаром*/}
                                <CoffeeItem
                                    onUpdateSearch={this.state.term}
                                    onFilterSelect={this.state.filter}
                                />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPart/>
            </>
        )
    };
};

