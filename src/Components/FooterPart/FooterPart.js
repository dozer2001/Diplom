import React from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import logoBlack from '../LookFor/logo/Logo_black.svg'
import logoDark from '../LookFor/logo/Beans_logo_dark.svg'

const FooterPart = () =>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <Col lg={{size: 5, offset: 4}}>
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to="/">
                                    <img src={logoBlack} alt="logo"/>
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
                <img className="beanslogo" src={logoDark} alt="Beans logo"/>
            </div>
        </footer>
    )
};

export default FooterPart;