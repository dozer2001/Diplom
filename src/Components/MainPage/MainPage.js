import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../LookFor/sass/style.sass'


import logoBlack from '../LookFor/logo/Beans_logo_dark.svg';
import logoBeans from '../LookFor/logo/Logo_black.svg';
import logo from '../LookFor/logo/Logo.svg'
import beans from '../LookFor/logo/Beans_logo.svg'
import MyData from '../../db.json'

import {Container, Row, Col} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';


export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            term: '',
            filter: 'all',


        };
    }

    componentWillMount() {

        this.setState(() => {
            const p = MyData;
            const b = p.bestsellers;
            let newArr = [];
            for (let key in b) {
                const item = b[key];
                newArr.push(item)

            }
            return {
                data: newArr
            }
        })
    }

    render() {

        return (
            <>
            <div className="preview">
                <Container>
                    <Row>
                        <Col lg="6">
                            <header>
                                <ul className="header">
                                    <li className="header__item">
                                        <Link to="/">
                                            <img src={logo} alt="logo"/>
                                        </Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to="/OurCoffee">Our coffee</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to="/ItemPage">For your pleasure</Link>
                                    </li>
                                </ul>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={beans} alt="Beans logo"/>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to="/OurCoffee" className="preview__btn">More</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section className="about">
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 3}}>
                            <div className="title">About Us</div>
                            <img className="beanslogo" src={logoBlack} alt="Beans logo"/>
                            <div className="about__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.<br/><br/>

                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="best">
                <Container>
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                <div className="best__item">
                                    <img
                                        src={this.state.data[0].url}
                                        alt="coffee"/>
                                    <div className="best__item-title">
                                        ${this.state.data[0].name}
                                    </div>
                                    <div className="best__item-price">{this.state.data[0].price}</div>
                                </div>
                                <div className="best__item">
                                    <img
                                        src={this.state.data[1].url}
                                        alt="coffee"/>
                                    <div className="best__item-title">
                                        ${this.state.data[1].name}
                                    </div>
                                    <div className="best__item-price">{this.state.data[1].price}</div>
                                </div>
                                <div className="best__item">
                                    <img
                                        src={this.state.data[2].url}
                                        alt="coffee"/>
                                    <div className="best__item-title">
                                        {this.state.data[2].name}
                                    </div>
                                    <div className="best__item-price">{this.state.data[2].price}</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <Col lg={{size: 5, offset: 4}}>
                            <ul className="footer">
                                <li className="footer__item">
                                    <Link to="/">
                                        <img src={logoBeans} alt="logo"/>
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="/OurCoffee" >Our coffee</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="/ItemPage">For your pleasure</Link>
                                </li>
                            </ul>
                        </Col>
                    </div>
                    <img className="beanslogo" src={logoBlack} alt="Beans logo"/>
                </div>
            </footer>
            </>
        )
    }

}

