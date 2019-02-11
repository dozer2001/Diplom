import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../LookFor/sass/style.sass'

import logoBlack from './img/Beans_logo_dark.svg'
import logoBeans from './img/Logo_black.svg'
import girl from './img/coffee_girl.jpg'
import logo from './img/Logo.svg'

import {Container, Row, Col} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';


const CoffeePage = () => {
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
                    <div lg={{size:4, offset:2}}>
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
                    <Col lg={{size: 4, offset:2}}>
                        <form action="#" className="shop__search">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..."
                                   className="shop__search-input"/>
                        </form>
                    </Col>
                    <Col lg="4">
                        <div className="shop__filter">
                            <div className="shop__filter-label">
                                Or filter
                            </div>
                            <div className="shop__filter-group">
                                <button className="shop__filter-btn">Brazil</button>
                                <button className="shop__filter-btn">Kenya</button>
                                <button className="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={{size:11,offset:1}} >
                        <div className="shop__wrapper">
                            <div className="shop__item">
                                <img
                                    src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                                    alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img
                                    src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                                    alt="coffee"/>
                                <div className="shop__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">15.99$</div>
                            </div>
                            <div className="shop__item">
                                <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">6.99$</div>
                            </div>
                            <div className="shop__item">
                                <img
                                    src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                                    alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img
                                    src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756"
                                    alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img
                                    src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                                    alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
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
};
export default CoffeePage;