import React from 'react';
import {Link} from 'react-router-dom';
import '../LookFor/sass/style.sass'
import FooterPart from '../FooterPart/index'


import logo from '../LookFor/logo/Logo.svg'
import logoBlack from '../LookFor/logo/Beans_logo_dark.svg'
import coffeeItem from '../LookFor/img/coffee_item.jpg'

import {Col} from 'reactstrap';



const ItemPage = () => {
 return(
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
         <div className="container">
             <div className="row">
                 <div className="col-lg-5 offset-1">
                     <img className="shop__girl" src={coffeeItem} alt="coffee_item"/>
                 </div>
                 <div className="col-lg-4">
                     <div className="title">About it</div>
                     <img className="beanslogo" src={logoBlack} alt="Beans logo"/>
                         <div className="shop__point">
                             <span>Country:</span>
                             Brazil
                         </div>
                         <div className="shop__point">
                             <span>Description:</span>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         </div>
                         <div className="shop__point">
                             <span>Price:</span>
                             <span className="shop__point-price">16.99$</span>
                         </div>
                 </div>
             </div>
         </div>
     </section>
    <FooterPart/>
     </>
 )
};

export default ItemPage;